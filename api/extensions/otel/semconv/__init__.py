"""Semantic convention shortcuts for Crew-specific spans."""

from .crew import CrewSpanAttributes
from .gen_ai import ChainAttributes, GenAIAttributes, LLMAttributes, RetrieverAttributes, ToolAttributes

__all__ = [
    "ChainAttributes",
    "CrewSpanAttributes",
    "GenAIAttributes",
    "LLMAttributes",
    "RetrieverAttributes",
    "ToolAttributes",
]
