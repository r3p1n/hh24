create table if not exists "user" (
  user_id uuid primary key default uuid_generate_v4(),
  name text not null
);