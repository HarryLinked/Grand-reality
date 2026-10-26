create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  subject text not null default '',
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

grant usage on schema public to anon;
grant insert on public.enquiries to anon;

drop policy if exists "Allow anonymous contact message submissions"
  on public.enquiries;
drop policy if exists "Allow anonymous enquiry submissions"
  on public.enquiries;

create policy "Allow anonymous enquiry submissions"
  on public.enquiries
  for insert
  to anon
  with check (true);
