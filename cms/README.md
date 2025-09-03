# Wagtail Headless CMS

## Setting Up RDS

## Hosting on EC2

## Migrating

Apply migrations using the following command

```bash
docker compose run web python manage.py migrate
```

## Getting Started

To run the CMS + insert content, you'll need access credentials. Reach out to the rpo

### First Time?

If needed, apply any migrations

```bash
docker compose run web python manage.py migrate
```

Create a superuser for access to the admin panel

```bash
docker compose run web python manage.py createsuperuser
```

Run the following to start the database and webserver containers

```bash
docker compose up --build
```

The CMS will now be available locally

scp -i

scp -i portfolio-cms-keypair.pem -r /home/srmarshall/code/portfolio-site/cms ec2-user@54.224.252.187:/home/ec2-user/
