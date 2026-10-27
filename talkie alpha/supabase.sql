-- Talkie : sauvegarde du compte (à coller une seule fois dans Supabase > SQL Editor > New query > Run)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "lire son profil" on public.profiles;
drop policy if exists "creer son profil" on public.profiles;
drop policy if exists "modifier son profil" on public.profiles;
drop policy if exists "supprimer son profil" on public.profiles;

create policy "lire son profil" on public.profiles for select using (auth.uid() = id);
create policy "creer son profil" on public.profiles for insert with check (auth.uid() = id);
create policy "modifier son profil" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "supprimer son profil" on public.profiles for delete using (auth.uid() = id);
