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
    (python312.withPackages (ps: with ps; [
      langchain-cohere
      aiohappyeyeballs
      aiohttp
      aiosignal
      annotated-types
      anyio
      attrs
      certifi
      charset-normalizer
      click
      cohere
      colorama
      dataclasses-json
      fastapi
      fastavro
      filelock
      frozenlist
      fsspec
      greenlet
      h11
      httpcore
      httpx
      httpx-sse
      huggingface-hub
      idna
      iniconfig
      jsonpatch
      jsonpointer
      langchain-community
      langchain-core
      langchain-text-splitters
      langsmith
      markdown-it-py
      marshmallow
      mdurl
      multidict
      python-multipart
      mypy-extensions
      numpy
      orjson
      packaging
      pluggy
      pydantic
      pydantic-settings
      pydantic-core
      pygments
      pytest
      python-dotenv
      pyyaml
      requests
      requests-toolbelt
      rich
      shellingham
      sqlalchemy
      starlette
      tenacity
      tokenizers
      tqdm
      typer
      typing-inspect
      typing-extensions
      urllib3
      uvicorn
      xxhash
      yarl
      zstandard
    ]))
  ];
}