import os

jsx_path = r"d:\charan\React\Fair-website\src\pages\CompaniesPage.jsx"
css_path = r"d:\charan\React\Fair-website\src\pages\CompaniesPage.css"

replacements = [
    ("course-list-card", "cmp-course-card"),
    ("course-all-grid", "cmp-grid-all"),
    ("clc-icon-wrap", "cmp-icon-wrap"),
    ("clc-title", "cmp-card-title"),
    ("clc-tagline", "cmp-card-tagline"),
    ("clc-header", "cmp-card-header"),
    ("clc-meta", "cmp-card-meta"),
    ("clc-module-tag", "cmp-module-tag"),
    ("clc-level-tag", "cmp-level-tag"),
    ("category-section", "cmp-category-section"),
    ("info-row-grid", "cmp-info-row"),
    ("problem-list", "cmp-problem-list"),
    ("problem-item", "cmp-problem-item"),
    ("problem-content", "cmp-problem-content"),
    ("warning-card", "cmp-warning-card"),
    ("warning-icon", "cmp-warning-icon"),
    ("glass-dark", "cmp-glass-dark"),
    ("toe-grid", "cmp-toe-grid"),
    ("toe-card", "cmp-toe-card"),
    ("toe-letter", "cmp-toe-letter"),
    ("toe-content", "cmp-toe-content"),
    ("toe-desc", "cmp-toe-desc"),
    ("toe-list", "cmp-toe-list"),
    ("toe-highlight", "cmp-toe-highlight"),
    ("how-it-works-grid", "cmp-how-grid"),
    ("how-step", "cmp-how-step"),
    ("step-number", "cmp-step-number"),
    ("step-content", "cmp-step-content"),
    ("step-arrow", "cmp-step-arrow"),
    ("expert-grid", "cmp-expert-grid"),
    ("expert-card", "cmp-expert-card"),
    ("expert-head", "cmp-expert-head"),
    ("expert-quote", "cmp-expert-quote"),
    ("fare-alignment", "cmp-fare-alignment"),
    ("alignment-label", "cmp-alignment-label"),
    ("use-case-list", "cmp-use-case-list"),
    ("competition-layout", "cmp-competition-layout"),
    ("expectation-split-grid", "cmp-expectation-grid"),
    ("vs-container", "cmp-vs-container"),
    ("vs-badge", "cmp-vs-badge"),
    ("side-badge", "cmp-side-badge"),
    ("competition-list", "cmp-competition-list"),
    ("competition-item", "cmp-competition-item"),
    ("cta-grid", "cmp-cta-grid"),
    ("cta-form-box", "cmp-cta-form-box"),
    ("grid-5-cols", "cmp-grid-5-cols"),
    ("grid-4-cols", "cmp-grid-4-cols"),
    ("grid-3-cols", "cmp-grid-3-cols"),
    ("companies-mini-form", "cmp-mini-form"),
    ("section-desc", "cmp-section-desc")
]

def replace_in_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

replace_in_file(jsx_path)
replace_in_file(css_path)
print("CSS Classes successfully namespaced!")
