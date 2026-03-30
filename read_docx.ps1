Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-DocxText {
    param([string]$Path)
    $zip = [System.IO.Compression.ZipFile]::OpenRead($Path)
    $docXmlEntry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
    
    if ($docXmlEntry) {
        $stream = $docXmlEntry.Open()
        $reader = New-Object IO.StreamReader($stream)
        $xmlContent = $reader.ReadToEnd()
        $reader.Close()
        $stream.Close()
        
        $zip.Dispose()
        
        # simple text extraction from xml tags
        $xmlContent = $xmlContent -replace '<w:p\b[^>]*>', "`r`n"
        $xmlContent = $xmlContent -replace '<[^>]+>', ''
        return $xmlContent.Trim()
    }
    
    $zip.Dispose()
}

$text1 = Read-DocxText "D:\charan\React\Fair-website\public\FARE_Freshers_Landing_Page.docx"
Write-Output "=== FRESHERS CONTENT ==="
Write-Output $text1

$text2 = Read-DocxText "D:\charan\React\Fair-website\public\Final trainer landing page.docx"
Write-Output "=== TRAINER CONTENT ==="
Write-Output $text2
