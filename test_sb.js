const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://pwsyhmmkszpldoqmrlwf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_TJTh0TspGgFgEKgEMvB9Cw_zhNef79T';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

async function test() {
    console.log('Testing allowed_ips upsert...');
    let res = await supabaseClient.from('allowed_ips').upsert({ ip: '1.2.3.4', label: 'test', is_blocked: false }, { onConflict: 'ip' });
    console.log('allowed_ips upsert:', res.error ? res.error.message : 'SUCCESS');

    console.log('Testing devices upsert...');
    res = await supabaseClient.from('devices').upsert({ device_id: '1.2.3.4', user_id: '1.2.3.4', failed_attempts: 1, is_blocked: false }, { onConflict: 'device_id' });
    console.log('devices upsert:', res.error ? res.error.message : 'SUCCESS');
}
test();
