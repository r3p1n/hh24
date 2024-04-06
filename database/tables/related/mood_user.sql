create table if not exists mood_user (
  mood_user_id uuid primary key default uuid_generate_v4(),
  inserted_at timestamp not null default current_timestamp,
  mood_id uuid references mood (mood_id),
  user_id uuid references "user" (user_id)
);