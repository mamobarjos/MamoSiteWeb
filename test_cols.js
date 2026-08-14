const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://pwsyhmmkszpldoqmrlwf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_TJTh0TspGgFgEKgEMvB9Cw_zhNef79T';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

async function test() {
    let res = await supabaseClient.from('allowed_ips').select('*').limit(1);
    console.log('allowed_ips columns:', res.data ? Object.keys(res.data[0] || {}) : res.error);
}
test();
