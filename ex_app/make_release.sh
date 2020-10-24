#!/bin/bash
sudo rm -rf compiled_desiderata
sudo mkdir compiled_desiderata
sudo mix do deps.get, deps.compile, compile
sudo MIX_ENV=prod mix release
sudo cp -r _build/prod/rel/ex_app compiled_desiderata
sudo mv desiderata.service ./compiled_desiderata
sudo mv desiderata_startup.sh ./compiled_desiderata
sudo mv desiderata_shutdown.sh ./compiled_desiderata
sudo mv desiderata_init.sh ./compiled_desiderata
sudo chmod +x ./compiled_desiderata/desiderata_init.sh
