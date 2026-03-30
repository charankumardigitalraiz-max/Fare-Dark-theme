import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def extract_text(docx_path):
    print(f"\n--- Extracting text from: {os.path.basename(docx_path)} ---")
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # Find all text nodes
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            paragraphs = []
            for p in tree.findall('.//w:p', namespaces):
                texts = [node.text for node in p.findall('.//w:t', namespaces) if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
            
            for p in paragraphs:
                print(p)
    except Exception as e:
        print(f"Error reading {docx_path}: {e}")

if len(sys.argv) > 1:
    for arg in sys.argv[1:]:
        extract_text(arg)
else:
    print("Please provide docx file paths as arguments.")
