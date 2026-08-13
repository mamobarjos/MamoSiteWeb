import os

html_path = r'C:\Users\HOME\OneDrive\Desktop\MamoSiteWeb-main\index.html'
js_path = r'C:\Users\HOME\OneDrive\Desktop\MamoSiteWeb-main\script.js'

with open(html_path, 'r', encoding='utf-8', errors='replace') as f:
    html_content = f.read()

old_html = '''                </div>
                <button type="submit" id="ip-gate-submit">'''

new_html = '''                </div>
                <p id="error-message" style="color: #ff4d4d; margin-top: 10px; font-size: 14px; text-align: center;"></p>
                <button type="submit" id="ip-gate-submit">'''

if old_html in html_content:
    html_content = html_content.replace(old_html, new_html)
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print('HTML updated.')
else:
    print('Error finding HTML block')

with open(js_path, 'r', encoding='utf-8', errors='replace') as f:
    js_content = f.read()

old_js_err1 = '''                        setGateMsg('error', <i class="fas fa-times-circle"></i> كلمة المرور غير صحيحة. يتبقى لك  محاولات قبل حظر الجهاز.);'''
new_js_err1 = '''                        const errMsg = <i class="fas fa-times-circle"></i> كلمة المرور غير صحيحة. يتبقى لك  محاولات قبل حظر الجهاز.;
                        setGateMsg('error', errMsg);
                        const errElem = document.getElementById('error-message');
                        if (errElem) errElem.innerHTML = errMsg;'''

if old_js_err1 in js_content:
    js_content = js_content.replace(old_js_err1, new_js_err1)
    print('JS Error 1 updated.')
else:
    print('Error finding JS Error 1')
    
old_js_err2 = '''                        setGateMsg('error', '<i class="fas fa-ban"></i> <b>تنبيه أمني:</b> لقد تجاوزت 5 محاولات خاطئة متتالية! تم حظر جهازك.');'''
new_js_err2 = '''                        const errMsg = '<i class="fas fa-ban"></i> <b>تنبيه أمني:</b> لقد تجاوزت 5 محاولات خاطئة متتالية! تم حظر جهازك.';
                        setGateMsg('error', errMsg);
                        const errElem = document.getElementById('error-message');
                        if (errElem) errElem.innerHTML = errMsg;'''

if old_js_err2 in js_content:
    js_content = js_content.replace(old_js_err2, new_js_err2)
    print('JS Error 2 updated.')
else:
    print('Error finding JS Error 2')

old_js_err3 = '''                    setGateMsg('error', '<i class="fas fa-times-circle"></i> كلمة المرور غير صحيحة، حاول مجدداً.');'''
new_js_err3 = '''                    const errMsg = '<i class="fas fa-times-circle"></i> كلمة المرور غير صحيحة، حاول مجدداً.';
                    setGateMsg('error', errMsg);
                    const errElem = document.getElementById('error-message');
                    if (errElem) errElem.innerHTML = errMsg;'''

if old_js_err3 in js_content:
    js_content = js_content.replace(old_js_err3, new_js_err3)
    print('JS Error 3 updated.')
else:
    print('Error finding JS Error 3')

# Check if there is an issue with toggle button event listener
with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
