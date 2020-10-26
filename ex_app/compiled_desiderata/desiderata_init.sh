#!/bin/bash
sudo cp /var/www/html/desiderata/ex_app/compiled_desiderata/desiderata_startup.sh /usr/local/bin/desiderata_startup.sh
sudo chmod 744 /usr/local/bin/desiderata_startup.sh
sudo chmod +x /usr/local/bin/desiderata_startup.sh
sudo cp /var/www/html/desiderata/ex_app/compiled_desiderata/desiderata_shutdown.sh /usr/local/bin/desiderata_shutdown.sh
sudo chmod 744 /usr/local/bin/desiderata_shutdown.sh
sudo chmod +x /usr/local/bin/desiderata_shutdown.sh
sudo cp /var/www/html/desiderata/ex_app/compiled_desiderata/desiderata.service /etc/systemd/system
sudo chmod 664 /etc/systemd/system/desiderata.service
sudo chmod +x /etc/systemd/system/desiderata.service
sudo systemctl daemon-reload
sudo systemctl enable desiderata.service
sudo systemctl restart desiderata.service