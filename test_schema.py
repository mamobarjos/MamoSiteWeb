from supabase import create_client
import os
import json

SUPABASE_URL = 'https://pwsyhmmkszpldoqmrlwf.supabase.co'
SUPABASE_KEY = 'sb_publishable_TJTh0TspGgFgEKgEMvB9Cw_zhNef79T' # same as frontend

client = create_client(SUPABASE_URL, SUPABASE_KEY)
res = client.table('allowed_ips').select('*').limit(1).execute()
print(res.data)
