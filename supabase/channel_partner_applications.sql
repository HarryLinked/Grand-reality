create table if not exists public.channel_partner_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  city text not null,
  phone text not null,
  experience text not null,
  company text not null,
  id_proof_path text not null,
  business_about text not null,
  created_at timestamptz not null default now()
);

alter table public.channel_partner_applications enable row level security;

grant usage on schema public to anon;
grant insert on public.channel_partner_applications to anon;

drop policy if exists "Allow anonymous channel partner applications"
  on public.channel_partner_applications;

create policy "Allow anonymous channel partner applications"
  on public.channel_partner_applications
  for insert
  to anon
  with check (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'channel-partner-id-proofs',
  'channel-partner-id-proofs',
  false,
  10485760,
  array['application/pdf', 'image/jpeg', 'image/png']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

grant insert on storage.objects to anon;

drop policy if exists "Allow anonymous channel partner ID proof uploads"
  on storage.objects;

create policy "Allow anonymous channel partner ID proof uploads"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'channel-partner-id-proofs');
