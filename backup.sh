# backup script, saving any deleted files in _archive folder within the destination

rsync -a -P --delete --backup --backup-dir=_archive/backup-`date +%F_%H-%M-%S` --exclude '_archive' --exclude '.DS_Store' [SOURCE] [DESTINATION]
