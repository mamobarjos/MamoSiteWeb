// Supabase Configuration
const SUPABASE_URL = 'https://pwsyhmmkszpldoqmrlwf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_TJTh0TspGgFgEKgEMvB9Cw_zhNef79T';

// Initialize Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Category Translation Dictionary
const CATEGORY_TRANSLATION = {
    "artificial_intelligence": "الذكاء الاصطناعي",
    "chrome_extensions": "إضافات الكروم",
    "computer_and_technology": "الحاسوب والتكنولوجيا",
    "cybersecurity": "الأمن السيبراني",
    "design": "التصميم",
    "ecommerce": "التجارة الإلكترونية",
    "english_learning": "تعلم الإنجليزية",
    "lifestyle_and_health": "الصحة ونمط الحياة",
    "online_shopping": "التسوق الإلكتروني",
    "miscellaneous_useful_sites": "مواقع مفيدة أخرى",
    "online_work": "العمل عبر الإنترنت",
    "programming": "البرمجة",
    "sound": "الصوتيات",
    "telegram_bots": "بوتات التلغرام",
    "trading_and_cryptocurrencies": "تداول العملات",
    "university_tools": "أدوات الجامعة",
    "video": "الفيديو",
    "writing_and_articles": "الكتابة والمقالات",
    "marketing": "التسويق"
};

const CATEGORIES = {
    "artificial_intelligence": ["ai_video_image_editing", "ai_bots_and_tools", "ai_prompt_writing", "ai_video_generation", "ai_avatars_and_characters", "ai_voice_and_music", "ai_content_creation"],
    "chrome_extensions": ["video_and_translation", "email_and_messaging", "content_and_design", "productivity_and_tools", "social_media_and_marketing", "ai_and_chatgpt", "education_and_exams", "website_analysis", "business_and_contacts"],
    "computer_and_technology": ["pc_building", "tech_tools", "file_management", "file_upload", "software_downloads", "device_repair", "qr_code_generator", "screen_recording", "video_backgrounds"],
    "cybersecurity": ["cybersecurity_tools", "dark_web", "linux_tools", "osint_and_people_search", "privacy_tools", "link_and_file_scanning", "password_and_identity", "email_and_phone_verification"],
    "design": ["libraries", "learning", "colors", "image_search", "ad_image_design", "photoshop_templates", "image_editing", "text_to_image", "image_lighting", "image_selling", "drawing_tools", "logo_design", "logo_animation"],
    "ecommerce": ["store_creation", "car_parts", "wholesale", "domain_purchase", "dropshipping", "amazon_training", "amazon_tools", "digital_products", "drop_service", "brand_naming"],
    "english_learning": ["language_learning"],
    "lifestyle_and_health": ["health_and_fitness", "movies_and_series", "travel_tools", "scholarship_tools", "calm_music"],
    "online_shopping": ["cheap_subscriptions", "shopping_assistance", "global_brands", "turkish_shopping"],
    "miscellaneous_useful_sites": ["research_and_questions", "home_and_interior_design", "live_streaming_and_games", "diy_projects", "kids_and_education", "miscellaneous_tools", "fake_cards_and_ids"],
    "online_work": ["youtube_tools", "online_jobs", "job_search", "project_ideas", "project_tools", "investor_platforms", "course_creation", "course_publishing", "link_shorteners", "document_templates"],
    "programming": ["study_programming", "program_projects", "solve_programming_problems", "website_development", "website_analysis", "seo_tools", "no_code_website_builders", "app_development", "no_code_app_builders", "advanced_programming_tools", "github_tools", "qa_testing"],
    "sound": ["music_download", "sound_search", "sound_editing", "text_to_speech"],
    "telegram_bots": ["media_and_images", "messaging_and_communication", "file_management", "downloads_and_content", "education_and_resources", "security_and_privacy", "miscellaneous_tools"],
    "trading_and_cryptocurrencies": ["crypto_and_forex_trading", "nft_platforms", "nft_games"],
    "university_tools": ["general_tools", "study_and_courses", "research_tools", "presentation_tools", "cv_and_job_tools", "free_books", "plagiarism_detection", "ai_detection", "paraphrasing_tools"],
    "video": ["video_download", "video_editing", "motion_videos", "video_montage", "animated_video_icons", "subtitle_tools"],
    "writing_and_articles": ["free_article_sources", "ai_article_generation", "ai_writing_tools", "article_writing_tools", "email_writing_tools", "paid_article_writing"],
    "marketing": [ "study_marketing", "content_ideas", "competitor_analysis", "data_collection", "audience_insights", "marketing_platforms", "response_tools", "task_management", "content_writing", "content_analysis", "ad_design", "video_design_pros", "video_recording", "ready_ad_templates", "ai_content_creation", "social_media_analysis", "ad_performance_analysis", "customer_communication", "chatbots", "content_publishing", "hashtags", "email_marketing", "affiliate_marketing", "affiliate_links", "link_management", "landing_pages", "social_media_tools", "tiktok_optimization", "social_media_management", "document_management", "account_trading", "ai_marketing" ]
};

const SUB_CATEGORY_TRANSLATION = {
    "ai_video_image_editing": "تعديل فيديو وصور",
    "ai_bots_and_tools": "بوتات وأدوات ذكية",
    "ai_prompt_writing": "كتابة البرومبت",
    "video_and_translation": "الفيديو والترجمة",
    "email_and_messaging": "الإيميلات والرسائل",
    "content_and_design": "المحتوى والتصميم",
    "productivity_and_tools": "الإنتاجية والأدوات",
    "social_media_and_marketing": "وسائل التواصل",
    "ai_and_chatgpt": "الذكاء الاصطناعي",
    "education_and_exams": "التعليم والامتحانات",
    "website_analysis": "تحليل المواقع",
    "business_and_contacts": "الأعمال وجهات الاتصال",
    "pc_building": "تجميع الكمبيوتر",
    "tech_tools": "أدوات تقنية",
    "file_management": "إدارة الملفات",
    "file_upload": "رفع الملفات",
    "software_downloads": "تحميل البرامج",
    "device_repair": "إصلاح الأجهزة",
    "qr_code_generator": "مولد رموز QR",
    "screen_recording": "تسجيل الشاشة",
    "video_backgrounds": "خلفيات فيديو",
    "cybersecurity_tools": "أدوات الأمن",
    "dark_web": "الويب المظلم",
    "linux_tools": "أدوات لينكس",
    "libraries": "مكتبات التصميم",
    "learning": "التعلم",
    "colors": "الألوان",
    "image_search": "بحث الصور",
    "ad_image_design": "تصميم إعلانات",
    "photoshop_templates": "قوالب فوتوشوب",
    "image_editing": "تعديل الصور",
    "text_to_image": "نص إلى صورة",
    "image_lighting": "إضاءة الصور",
    "image_selling": "بيع الصور",
    "drawing_tools": "أدوات الرسم",
    "logo_design": "تصميم الشعارات",
    "logo_animation": "تحريك الشعارات",
    "store_creation": "إنشاء متجر",
    "car_parts": "قطع غيار السيارات",
    "wholesale": "الجملة",
    "domain_purchase": "شراء نطاق",
    "dropshipping": "الدروبشيبينغ",
    "amazon_training": "تدريب أمازون",
    "amazon_tools": "أدوات أمازون",
    "digital_products": "منتجات رقمية",
    "drop_service": "خدمة الدروب",
    "language_learning": "تعلم اللغة",
    "health_and_fitness": "الصحة وبناء العضلات",
    "movies_and_series": "الأفلام والمسلسلات",
    "travel_tools": "أدوات السفر",
    "scholarship_tools": "أدوات المنح الدراسية",
    "calm_music": "موسيقى هادئة",
    "cheap_subscriptions": "اشتراكات رخيصة",
    "shopping_assistance": "مساعدة التسوق",
    "global_brands": "ماركات عالمية",
    "turkish_shopping": "تسوق تركي",
    "research_and_questions": "البحث والأسئلة",
    "home_and_interior_design": "تصميم البيوت والديكور",
    "live_streaming_and_games": "البث المباشر والألعاب",
    "diy_projects": "مشاريع يدوية",
    "kids_and_education": "الأطفال والتعليم",
    "miscellaneous_tools": "أدوات متنوعة",
    "fake_cards_and_ids": "بطاقات وهمية",
    "youtube_tools": "أدوات يوتيوب",
    "online_jobs": "وظائف عبر الإنترنت",
    "job_search": "بحث عن عمل",
    "project_ideas": "أفكار مشاريع",
    "project_tools": "أدوات مشاريع",
    "investor_platforms": "منصات المستثمرين",
    "course_creation": "إنشاء دورات",
    "course_publishing": "نشر الدورات",
    "link_shorteners": "مقصر الروابط",
    "document_templates": "قوالب المستندات",
    "study_programming": "دراسة البرمجة",
    "program_projects": "مشاريع برمجة",
    "solve_programming_problems": "حل مشاكل برمجة",
    "website_development": "تطوير المواقع",
    "seo_tools": "أدوات SEO",
    "no_code_website_builders": "مواقع بدون كود",
    "app_development": "تطوير التطبيقات",
    "no_code_app_builders": "تطبيقات بدون كود",
    "advanced_programming_tools": "أدوات برمجة متقدمة",
    "github_tools": "أدوات جيثب",
    "qa_testing": "اختبار الجودة",
    "music_download": "تحميل الموسيقى",
    "sound_search": "بحث الصوت",
    "sound_editing": "تعديل الصوت",
    "text_to_speech": "نص إلى كلام",
    "media_and_images": "وسائط وصور",
    "messaging_and_communication": "الرسائل والتواصل",
    "downloads_and_content": "التحميل والمحتوى",
    "education_and_resources": "التعليم والموارد",
    "security_and_privacy": "الأمان والخصوصية",
    "crypto_and_forex_trading": "تداول العملات",
    "nft_platforms": "منصات NFT",
    "nft_games": "ألعاب NFT",
    "general_tools": "أدوات عامة",
    "study_and_courses": "الدراسة والدورات",
    "research_tools": "أدوات البحث",
    "presentation_tools": "أدوات العروض",
    "cv_and_job_tools": "أدوات السيرة والوظائف",
    "free_books": "كتب مجانية",
    "free_article_sources": "مصادر مقالات مجانية",
    "ai_article_generation": "توليد مقالات",
    "ai_writing_tools": "أدوات كتابة",
    "article_writing_tools": "أدوات مقالات",
    "email_writing_tools": "أدوات إيميلات",
    "paid_article_writing": "مقالات مدفوعة",
    "video_download": "تحميل الفيديو",
    "video_editing": "تحرير الفيديو",
    "motion_videos": "فيديوهات متحركة",
    "video_montage": "مونتاج الفيديو",
    "animated_video_icons": "أيقونات فيديو متحركة",
    "study_marketing": "دراسة التسويق",
    "content_ideas": "أفكار المحتوى",
    "competitor_analysis": "تحليل المنافسين",
    "data_collection": "جمع البيانات",
    "audience_insights": "رؤى الجمهور",
    "marketing_platforms": "منصات التسويق",
    "response_tools": "أدوات الاستجابة",
    "task_management": "إدارة المهام",
    "content_writing": "كتابة المحتوى",
    "content_analysis": "تحليل المحتوى",
    "ad_design": "تصميم الإعلانات",
    "video_design_pros": "محترفو تصميم الفيديو",
    "video_recording": "تسجيل الفيديو",
    "ready_ad_templates": "قوالب إعلانات جاهزة",
    "ai_content_creation": "إنشاء محتوى بالذكاء الاصطناعي",
    "social_media_analysis": "تحليل وسائل التواصل",
    "ad_performance_analysis": "تحليل أداء الإعلانات",
    "customer_communication": "تواصل العملاء",
    "chatbots": "الشات بوتس",
    "content_publishing": "نشر المحتوى",
    "hashtags": "الهاشتاغات",
    "email_marketing": "التسويق بالإيميل",
    "affiliate_marketing": "التسويق بالعمولة",
    "affiliate_links": "روابط التسويق بالعمولة",
    "link_management": "إدارة الروابط",
    "landing_pages": "صفحات الهبوط",
    "social_media_tools": "أدوات وسائل التواصل",
    "tiktok_optimization": "تحسين تيك توك",
    "social_media_management": "إدارة وسائل التواصل",
    "document_management": "إدارة المستندات",
    "account_trading": "تداول الحسابات",
    "ai_marketing": "التسويق بالذكاء الاصطناعي",
    "ai_video_generation": "إنشاء فيديو بالذكاء",
    "ai_avatars_and_characters": "شخصيات وأفاتار ذكية",
    "ai_voice_and_music": "الصوت والموسيقى بالذكاء",
    "osint_and_people_search": "البحث عن هويات ومعلومات",
    "privacy_tools": "أدوات الخصوصية",
    "link_and_file_scanning": "فحص الروابط والملفات",
    "password_and_identity": "كلمات السر والحماية",
    "email_and_phone_verification": "فحص الإيميلات والأرقام",
    "brand_naming": "تسمية المشاريع",
    "plagiarism_detection": "كشف الاقتباس والسرقة",
    "ai_detection": "كشف نصوص الذكاء الاصطناعي",
    "paraphrasing_tools": "إعادة صياغة النصوص",
    "subtitle_tools": "التفريغ والترجمة الصوتية"
};

// State Management
let allSites = [];
let filteredSites = [];
let activeCategory = 'all';

// Pagination State
let currentPage = 1;
const ITEMS_PER_PAGE = 15;

// DOM Elements
const sitesGrid = document.getElementById('sites-grid');
const searchInput = document.getElementById('main-search');
const suggestionsDropdown = document.getElementById('search-suggestions');
const categoryContainer = document.getElementById('category-chips');
const resultsCount = document.getElementById('results-count');
const sortSelect = document.getElementById('sort-select');
const themeToggle = document.getElementById('theme-toggle');

// Intersection Observer for Lazy Loading
const loadMoreObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loadMoreSites();
    }
}, { rootMargin: '100px' });

/**
 * Fetch data from Supabase
 */
async function fetchSites() {
    try {
        let allData = [];
        let offset = 0;
        const pageSize = 1000;
        
        while (true) {
            const { data, error } = await supabaseClient
                .from('sites')
                .select('*')
                .order('created_at', { ascending: false })
                .range(offset, offset + pageSize - 1);

            if (error) throw error;
            if (!data || data.length === 0) break;
            
            allData = allData.concat(data);
            if (data.length < pageSize) break;
            
            offset += pageSize;
        }

        // Map English categories to Arabic using the dictionary and filter empty URLs
        allSites = allData
            .filter(site => site.website && site.website.trim() !== '')
            .map(site => {
                return {
                    ...site,
                    main_category_ar: CATEGORY_TRANSLATION[site.main_category] || site.main_category
                };
            });
        filteredSites = [...allSites];
        
        renderCategories();
        renderSites(true);
    } catch (error) {
        console.error('Error fetching data:', error);
        sitesGrid.innerHTML = `
            <div class="error-msg" style="color: #ef4444; padding: 2rem; background: rgba(239, 68, 68, 0.1); border-radius: 12px;">
                <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <h3 style="margin-bottom: 0.5rem;">حدث خطأ أثناء جلب البيانات</h3>
                <p style="font-family: monospace; font-size: 0.9rem; direction: ltr; text-align: left;">
                    Error Details: ${error.message || JSON.stringify(error)}
                </p>
            </div>
        `;
    }
}

/**
 * Render Category Chips
 */
function renderCategories() {
    // Extract unique categories (Arabic names)
    const categories = ['الكل', ...new Set(allSites.map(site => site.main_category_ar))];
    
    categoryContainer.innerHTML = categories.map(cat => `
        <button class="chip ${cat === 'الكل' ? 'active' : ''}" 
                data-category="${cat === 'الكل' ? 'all' : cat}">
            ${cat}
        </button>
    `).join('');

    // Add event listeners to chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            selectCategory(chip.dataset.category);
        });
    });
}

function selectCategory(categoryName) {
    document.querySelectorAll('.chip').forEach(c => {
        c.classList.toggle('active', c.dataset.category === categoryName);
    });
    activeCategory = categoryName;
    filterAndRender();
}

/**
 * Create Site Card HTML
 */
function createCard(site) {
    return `
        <article class="site-card" data-aos="fade-up">
            <div class="card-header">
                <a href="${site.website}" target="_blank" class="site-name">${site.website.replace(/^https?:\/\//i, '')}</a>
                <span class="category-badge">${site.main_category_ar}</span>
            </div>
            <p class="site-desc">${site.description}</p>
            ${site.benefit ? `
            <div class="site-benefit">
                <span class="benefit-label">الفائدة:</span>
                ${site.benefit}
            </div>` : ''}
        </article>
    `;
}

/**
 * Filter and Render Sites
 */
function filterAndRender() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredSites = allSites.filter(site => {
        const matchesCategory = activeCategory === 'all' || site.main_category_ar === activeCategory;
        const matchesSearch = !searchTerm || 
            site.website.toLowerCase().includes(searchTerm) ||
            site.description.toLowerCase().includes(searchTerm) ||
            (site.benefit && site.benefit.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });

    currentPage = 1;
    renderSites(true);
}

/**
 * Render the Grid
 */
function renderSites(reset = false) {
    if (reset) {
        sitesGrid.innerHTML = '';
    }

    if (filteredSites.length === 0) {
        sitesGrid.innerHTML = `
            <div class="empty-state-container">
                <i class="fas fa-box-open empty-state-icon"></i>
                <h3 class="empty-state-title">لا توجد نتائج</h3>
                <p class="empty-state-desc">لم نعثر على أي مواقع تطابق بحثك حالياً. جرب استخدام كلمات مفتاحية مختلفة أو تصفح التصنيفات.</p>
                <button class="nav-btn" onclick="searchInput.value=''; filterAndRender();">مسح البحث</button>
            </div>
        `;
        resultsCount.innerText = '0 موقع';
        return;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE;
    const sitesToRender = filteredSites.slice(startIndex, endIndex);

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = sitesToRender.map(site => createCard(site)).join('');
    
    while(tempDiv.firstChild) {
        sitesGrid.appendChild(tempDiv.firstChild);
    }

    resultsCount.innerText = `تم العثور على ${filteredSites.length} موقع`;

    // Handle Lazy Loader Spinner
    const existingLoader = document.getElementById('lazy-loader');
    if (existingLoader) {
        loadMoreObserver.unobserve(existingLoader);
        existingLoader.remove();
    }

    if (endIndex < filteredSites.length) {
        const loaderDiv = document.createElement('div');
        loaderDiv.id = 'lazy-loader';
        loaderDiv.className = 'load-more-container';
        loaderDiv.innerHTML = '<div class="loader-spinner"></div>';
        sitesGrid.appendChild(loaderDiv);
        loadMoreObserver.observe(loaderDiv);
    }
}

function loadMoreSites() {
    currentPage++;
    renderSites(false);
}

// --- Autocomplete Handling ---
let searchTimeout;

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    
    // Debounce the actual filtering (to avoid lag while typing)
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        filterAndRender();
    }, 300);

    // Show suggestions instantly
    showSuggestions(value);
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsDropdown.contains(e.target)) {
        suggestionsDropdown.classList.add('hidden');
    }
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length > 0) {
        showSuggestions(searchInput.value.trim());
    }
});

function applyHighlight(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="highlight-text">$1</mark>');
}

function showSuggestions(query) {
    if (query.length < 2) {
        suggestionsDropdown.classList.add('hidden');
        return;
    }

    const lowerQuery = query.toLowerCase();
    
    // 1. Search in Categories
    const categories = ['الكل', ...new Set(allSites.map(site => site.main_category_ar))];
    const matchedCategories = categories.filter(cat => cat !== 'الكل' && cat.toLowerCase().includes(lowerQuery)).slice(0, 3);
    
    // 2. Search in Sites
    const matchedSites = allSites.filter(site => 
        site.website.toLowerCase().includes(lowerQuery) || 
        site.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);

    if (matchedCategories.length === 0 && matchedSites.length === 0) {
        suggestionsDropdown.classList.add('hidden');
        return;
    }

    let html = '';

    if (matchedCategories.length > 0) {
        html += `<div class="suggestion-group-title">تصنيفات مقترحة</div>`;
        matchedCategories.forEach(cat => {
            html += `
                <div class="suggestion-item" onclick="selectSuggestionCategory('${cat}')">
                    <i class="fas fa-folder suggestion-icon"></i>
                    <div class="suggestion-content">
                        <span class="suggestion-title">${applyHighlight(cat, query)}</span>
                    </div>
                </div>
            `;
        });
    }

    if (matchedSites.length > 0) {
        html += `<div class="suggestion-group-title">مواقع مقترحة</div>`;
        matchedSites.forEach(site => {
            const cleanUrl = site.website.replace(/^https?:\/\//i, '');
            html += `
                <div class="suggestion-item" onclick="selectSuggestionSite('${site.website}')">
                    <i class="fas fa-globe suggestion-icon"></i>
                    <div class="suggestion-content">
                        <span class="suggestion-title">${applyHighlight(cleanUrl, query)}</span>
                        <span class="suggestion-desc">${applyHighlight(site.description, query)}</span>
                    </div>
                </div>
            `;
        });
    }

    suggestionsDropdown.innerHTML = html;
    suggestionsDropdown.classList.remove('hidden');
}

window.selectSuggestionCategory = function(cat) {
    selectCategory(cat);
    searchInput.value = '';
    suggestionsDropdown.classList.add('hidden');
    filterAndRender();
};

window.selectSuggestionSite = function(websiteName) {
    searchInput.value = websiteName.replace(/^https?:\/\//i, '');
    suggestionsDropdown.classList.add('hidden');
    filterAndRender();
};

sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    if (sortBy === 'alphabetical') {
        filteredSites.sort((a, b) => a.website.localeCompare(b.website));
    } else {
        filteredSites.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    currentPage = 1;
    renderSites(true);
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.add('no-transition');
    void document.body.offsetHeight; // Force reflow
    
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    void document.body.offsetHeight; // Force reflow again
    setTimeout(() => {
        document.body.classList.remove('no-transition');
    }, 10);
});

// Initialize
fetchSites();

// --- Modal Logic ---
const suggestModal = document.getElementById('suggest-modal');
const openSuggestBtn = document.getElementById('open-suggest-modal');
const closeBtn = document.querySelector('.close-modal');
const suggestForm = document.getElementById('suggest-form');
const sugMsg = document.getElementById('sug-msg');
const submitBtn = document.getElementById('submit-suggest');

// Populate Category Dropdown
const sugCategorySelect = document.getElementById('sug-category');
const sugSubCategorySelect = document.getElementById('sug-sub-category');

Object.entries(CATEGORY_TRANSLATION).forEach(([enKey, arName]) => {
    const option = document.createElement('option');
    option.value = arName;
    option.textContent = arName;
    sugCategorySelect.appendChild(option);
});

sugCategorySelect.addEventListener('change', () => {
    const selectedArName = sugCategorySelect.value;
    let selectedEnKey = '';
    for (const [key, val] of Object.entries(CATEGORY_TRANSLATION)) {
        if (val === selectedArName) {
            selectedEnKey = key;
            break;
        }
    }
    
    sugSubCategorySelect.innerHTML = '<option value="" disabled selected hidden>يرجى اختيار تصنيف فرعي</option>';
    if (selectedEnKey && CATEGORIES[selectedEnKey]) {
        CATEGORIES[selectedEnKey].forEach(subEnKey => {
            const option = document.createElement('option');
            const subArName = SUB_CATEGORY_TRANSLATION[subEnKey] || subEnKey;
            option.value = subArName;
            option.textContent = subArName;
            sugSubCategorySelect.appendChild(option);
        });
        sugSubCategorySelect.disabled = false;
    } else {
        sugSubCategorySelect.disabled = true;
    }
});

function openModal() {
    suggestModal.classList.add('show');
    sugMsg.innerHTML = '';
    sugMsg.className = 'sug-msg';
}

function closeModal() {
    suggestModal.classList.remove('show');
    suggestForm.reset();
}

openSuggestBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === suggestModal) {
        closeModal();
    }
});

// Handle Form Submission
suggestForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const website = document.getElementById('sug-website').value.trim();
    const category = document.getElementById('sug-category').value.trim();
    const subCategory = document.getElementById('sug-sub-category').value.trim();
    const description = document.getElementById('sug-desc').value.trim();
    const benefit = document.getElementById('sug-benefit').value.trim();
    
    if (!website || !category || !subCategory || !description || !benefit) return;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;
    
    try {
        const { error } = await supabaseClient.from('suggestions').insert({
            website: website,
            main_category: category,
            sub_category: subCategory,
            description: description,
            benefit: benefit
        });
        
        if (error) throw error;
        
        sugMsg.innerHTML = '<i class="fas fa-check-circle"></i> شكراً لك! تم الإرسال بنجاح وتتم مراجعته.';
        sugMsg.className = 'sug-msg success';
        suggestForm.reset();
        
        setTimeout(() => {
            closeModal();
        }, 3000);
    } catch (error) {
        console.error('Error submitting suggestion:', error);
        sugMsg.innerHTML = '<i class="fas fa-exclamation-triangle"></i> حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.';
        sugMsg.className = 'sug-msg error';
    } finally {
        submitBtn.innerHTML = 'إرسال الاقتراح <i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
    }
});
