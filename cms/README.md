# Wagtail Headless CMS

## Getting Started

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
