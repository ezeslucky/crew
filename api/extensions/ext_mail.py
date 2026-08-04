import logging

from flask import Flask

from configs import crew_config
from crew_app import CrewApp

logger = logging.getLogger(__name__)


class Mail:
    def __init__(self):
        self._client = None
        self._default_send_from = None

    def is_inited(self) -> bool:
        return self._client is not None

    def init_app(self, app: Flask):
        mail_type = crew_config.MAIL_TYPE
        if not mail_type:
            logger.warning("MAIL_TYPE is not set")
            return

        if crew_config.MAIL_DEFAULT_SEND_FROM:
            self._default_send_from = crew_config.MAIL_DEFAULT_SEND_FROM

        match mail_type:
            case "resend":
                import resend

                api_key = crew_config.RESEND_API_KEY
                if not api_key:
                    raise ValueError("RESEND_API_KEY is not set")

                api_url = crew_config.RESEND_API_URL
                if api_url:
                    resend.api_url = api_url

                resend.api_key = api_key
                self._client = resend.Emails
            case "smtp":
                from libs.smtp import SMTPClient

                if not crew_config.SMTP_SERVER or not crew_config.SMTP_PORT:
                    raise ValueError("SMTP_SERVER and SMTP_PORT are required for smtp mail type")
                if not crew_config.SMTP_USE_TLS and crew_config.SMTP_OPPORTUNISTIC_TLS:
                    raise ValueError("SMTP_OPPORTUNISTIC_TLS is not supported without enabling SMTP_USE_TLS")
                self._client = SMTPClient(
                    server=crew_config.SMTP_SERVER,
                    port=crew_config.SMTP_PORT,
                    username=crew_config.SMTP_USERNAME or "",
                    password=crew_config.SMTP_PASSWORD or "",
                    _from=crew_config.MAIL_DEFAULT_SEND_FROM or "",
                    use_tls=crew_config.SMTP_USE_TLS,
                    opportunistic_tls=crew_config.SMTP_OPPORTUNISTIC_TLS,
                )
            case "sendgrid":
                from libs.sendgrid import SendGridClient

                if not crew_config.SENDGRID_API_KEY:
                    raise ValueError("SENDGRID_API_KEY is required for SendGrid mail type")

                self._client = SendGridClient(
                    sendgrid_api_key=crew_config.SENDGRID_API_KEY, _from=crew_config.MAIL_DEFAULT_SEND_FROM or ""
                )
            case _:
                raise ValueError(f"Unsupported mail type {mail_type}")

    def send(self, to: str, subject: str, html: str, from_: str = ""):
        if not self._client:
            raise ValueError("Mail client is not initialized")

        if not from_ and self._default_send_from:
            from_ = self._default_send_from

        if not from_:
            raise ValueError("mail from is not set")

        if not to:
            raise ValueError("mail to is not set")

        if not subject:
            raise ValueError("mail subject is not set")

        if not html:
            raise ValueError("mail html is not set")

        self._client.send(
            {
                "from": from_,
                "to": to,
                "subject": subject,
                "html": html,
            }
        )


def is_enabled() -> bool:
    return crew_config.MAIL_TYPE is not None and crew_config.MAIL_TYPE != ""


def init_app(app: CrewApp):
    mail.init_app(app)


mail = Mail()
