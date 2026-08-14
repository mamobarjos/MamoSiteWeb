const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = 'https://pwsyhmmkszpldoqmrlwf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_TJTh0TspGgFgEKgEMvB9Cw_zhNef79T';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

async function test() {
    let res = await supabaseClient.from('allowed_ips').upsert({ ip: '1.2.3.4', label: 'test', failed_attempts: 0 }, { onConflict: 'ip' });
    console.log('Test 1:', res.error ? res.error.message : 'SUCCESS');
    
    let res2 = await supabaseClient.from('allowed_ips').upsert({ ip: '1.2.3.4', label: 'test' }, { onConflict: 'ip' });
    console.log('Test 2:', res2.error ? res2.error.message : 'SUCCESS');
}
test();
