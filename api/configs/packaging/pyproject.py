from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings


class PyProjectConfig(BaseModel):
    version: str = Field(description="Crew version", default="")


class CrewToolConfig(BaseModel):
    min_crewctl_version: str = Field(
        description="Oldest crewctl version served on /openapi/v1",
        default="0.0.0",
    )


class ToolConfig(BaseModel):
    crew: CrewToolConfig = Field(default=CrewToolConfig())


class PyProjectTomlConfig(BaseSettings):
    """
    configs in api/pyproject.toml
    """

    project: PyProjectConfig = Field(
        description="configs in the project section of pyproject.toml",
        default=PyProjectConfig(),
    )

    tool: ToolConfig = Field(
        description="configs in the [tool.*] section of pyproject.toml",
        default=ToolConfig(),
    )
