import CVTemplateOne from "@components/FileConvert/Templates/CVTemplateOne"
import { Box, Button } from "@mui/material"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

const ConvertToWord = () => {

  const downloadWordFile = () => {
    console.log('Downloading Word File')
    downloadPdfFile()
  }

  const downloadPdfFile = () => {
    const input = document.getElementById('divToPrint')
    if (!input) return
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF()
        pdf.addImage(imgData, 'PNG', 0, 0)
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf")
      })

  }

  return (
    <Box>
      {/* Template */}
      <CVTemplateOne />
      {/* Download */}
      <Box display='flex' justifyContent='center' py={5}>
        <Button variant='contained' onClick={downloadWordFile}>Download Converted Word</Button>
      </Box>
    </Box>
  )
}

export default ConvertToWord