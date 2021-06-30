cd /home/t2elzeth/sanri/front_sanri || exit

git pull origin deploy

docker-compose up --build -d
