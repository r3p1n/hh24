create table if not exists mood (
  mood_id uuid primary key default uuid_generate_v4(),
  name text not null
);