{ pkgs ? import <nixpkgs> { } }:

let
  # Define a custom derivation since langchain-cohere isn't in default nixpkgs
  langchain-cohere = pkgs.python312Packages.buildPythonPackage rec {
    pname = "langchain-cohere";
    version = "0.5.1";
    pyproject = true;

    src = pkgs.fetchPypi {
      pname = "langchain_cohere";
      inherit version;
      sha256 = "sha256-ERKMBODPPQcxt9tK8P3C7cQb4TVkf8HlNKtgqSNqAbA=";
    };

    build-system = with pkgs.python312Packages; [
      poetry-core
      pythonRelaxDepsHook
    ];

    dependencies = with pkgs.python312Packages; [
      langchain-core
      langchain-community
      cohere
      requests
      types-pyyaml
    ];

    # Relax strict dependency version checking since Nixpkgs might have older/different versions
    pythonRelaxDeps = [ "langchain-core" ];

    # Disabling tests so we don't have to resolve testing dependencies for the build
    doCheck = false;
  };
in
pkgs.mkShell {
  packages = with pkgs; [
    pnpm
    nodejs
    python3
    langchain-cohere
    python312Packages.aiohappyeyeballs
    python312Packages.aiohttp
    python312Packages.aiosignal
    python312Packages.annotated-types
    python312Packages.anyio
    python312Packages.attrs
    python312Packages.certifi
    python312Packages.charset-normalizer
    python312Packages.click
    python312Packages.cohere
    python312Packages.colorama
    python312Packages.dataclasses-json
    python312Packages.fastapi
    python312Packages.fastavro
    python312Packages.filelock
    python312Packages.frozenlist
    python312Packages.fsspec
    python312Packages.greenlet
    python312Packages.h11
    python312Packages.httpcore
    python312Packages.httpx
    python312Packages.httpx-sse
    python312Packages.huggingface-hub
    python312Packages.idna
    python312Packages.iniconfig
    python312Packages.jsonpatch
    python312Packages.jsonpointer
    python312Packages.langchain-community
    python312Packages.langchain-core
    python312Packages.langchain-text-splitters
    python312Packages.langsmith
    python312Packages.markdown-it-py
    python312Packages.marshmallow
    python312Packages.mdurl
    python312Packages.multidict
    python312Packages.python-multipart
    python312Packages.mypy-extensions
    python312Packages.numpy
    python312Packages.orjson
    python312Packages.packaging
    python312Packages.pluggy
    python312Packages.pydantic
    python312Packages.pydantic-settings
    python312Packages.pydantic-core
    python312Packages.pygments
    python312Packages.pytest
    python312Packages.python-dotenv
    python312Packages.pyyaml
    python312Packages.requests
    python312Packages.requests-toolbelt
    python312Packages.rich
    python312Packages.shellingham
    python312Packages.sqlalchemy
    python312Packages.starlette
    python312Packages.tenacity
    python312Packages.tokenizers
    python312Packages.tqdm
    python312Packages.typer
    python312Packages.typing-inspect
    python312Packages.typing-extensions
    python312Packages.urllib3
    python312Packages.uvicorn
    python312Packages.xxhash
    python312Packages.yarl
    python312Packages.zstandard
  ];
}