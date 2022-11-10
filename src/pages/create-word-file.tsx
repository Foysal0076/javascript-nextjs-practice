// import * as fs from "fs"
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableCell, TableRow, WidthType, AlignmentType, convertInchesToTwip, ShadingType, ImageRun } from "docx"
import { Box, Button, Container, Typography } from "@mui/material"
import { saveAs } from 'file-saver'
import DocViewer, { DocViewerRenderers } from "react-doc-viewer"
import ConvertToWord from "@components/FileConvert/ConvertToWord"

const mockData = {
  title: 'Export Word File From React',
  description: 'A test data for creating and exporting microsoft word file with Javascript and React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis perferendis ratione quibusdam ducimus, aut nobis eum minima quas laboriosam laborum quod quo omnis aspernatur non tempora ea. Id neque ex accusamus ullam tempore sequi optio, impedit eligendi earum quod deserunt obcaecati eos iure nisi, atque in quam aspernatur recusandae repellendus. Ut minima veritatis dignissimos inventore delectus, magnam perspiciatis non unde explicabo recusandae excepturi modi molestiae quos sit assumenda, fugiat quidem nemo accusamus officia enim alias esse facilis, corrupti perferendis? Unde exercitationem libero quos dolorum cum voluptatum dolor eius numquam quidem, rerum officiis voluptatibus temporibus eum sint, modi cupiditate minus!',
  data: [
    { id: 1, name: 'Item 1', image: '/assets/images/winter-deer.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa!', price: '$100', expired: '2023-01-01' },
    { id: 2, name: 'Item 2', image: '/assets/images/winter-deer.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa!', price: '$120', expired: '2023-01-01' },
    { id: 3, name: 'Item 3', image: '/assets/images/winter-deer.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa!', price: '$140', expired: '2023-01-01' },
    { id: 4, name: 'Item 4', image: '/assets/images/winter-deer.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa!', price: '$170', expired: '2023-01-01' },
    { id: 5, name: 'Item 5', image: '/assets/images/winter-deer.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa!', price: '$90', expired: '2023-01-01' },
  ]
}

const createTableCells = (item: any) => {
  const cells = []
  for (const key in item) {
    if (item.hasOwnProperty(key)) {
      const isImage: boolean = key === 'image'

      if (isImage) {
        // const currentCell = new ImageRun({
        //     data: fs.readFileSync(item[key]),
        //     transformation: {
        //         width: 108,
        //         height: 85,
        //     },
        // })
        // cells.push(currentCell)
        console.log(isImage)
      } else {
        const currentCell = new TableCell({
          width: {
            size: 4505,
            type: WidthType.DXA,
          },
          children: [new Paragraph({ text: item[key].toString() })]
        })
        cells.push(currentCell)
      }
    }
  }
  return cells
}

const document = new Document({
  styles: {
    paragraphStyles: [
      {
        id: "myCustomStyle",
        name: "My Custom Style",
        basedOn: "Normal",
        run: {
          color: "101010",
          bold: true,
          size: 26,
          font: "Calibri",

        },
        paragraph: {
          spacing: { line: 276, before: 150, after: 150 }
        }
      },
      {
        id: "tableHeader",
        name: "My Table Header Style",
        basedOn: "Normal",
        run: {
          color: "3A3845",
          bold: true,
          size: 36,
          font: "Calibri",
        },
        paragraph: {
          spacing: { line: 276, before: 250, after: 150 },
          indent: {
            left: convertInchesToTwip(0.1),
          },
          // alignment: AlignmentType.CENTER,
        }
      },
    ]
  },
  sections: [
    {
      children: [
        new Paragraph({ text: mockData.title, heading: HeadingLevel.TITLE }),
        new Paragraph({
          text: mockData.description,
          style: "myCustomStyle"
        }),
        new Table({
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: {
                    size: 4505,
                    type: WidthType.DXA,
                  },
                  shading: {
                    fill: "42c5f4",
                    type: ShadingType.PERCENT_95,
                    color: "auto",
                  },
                  children: [new Paragraph({ text: 'ID', style: "tableHeader", })]
                }),
                new TableCell({
                  width: {
                    size: 4505,
                    type: WidthType.DXA,
                  },
                  shading: {
                    fill: "b79c2f",
                    type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                    color: "auto",
                  },
                  children: [new Paragraph({ text: 'Title', style: "tableHeader" })]
                }),
                new TableCell({
                  width: {
                    size: 4505,
                    type: WidthType.DXA,
                  },
                  shading: {
                    fill: "b79c2f",
                    type: ShadingType.CLEAR,
                    color: "auto",
                  },
                  children: [new Paragraph({ text: 'Image', style: "tableHeader" })]
                }),
                new TableCell({
                  width: {
                    size: 4505,
                    type: WidthType.DXA,
                  },
                  shading: {
                    fill: "#111111",
                    type: ShadingType.SOLID,
                    color: "auto",
                  },

                  children: [new Paragraph({ text: 'Description', style: "tableHeader" })]
                }),
                new TableCell({
                  width: {
                    size: 4505,
                    type: WidthType.DXA,
                  },
                  shading: {
                    fill: "880aa8",
                    type: ShadingType.PERCENT_10,
                    color: "e2df0b",
                  },
                  children: [new Paragraph({ text: 'Price', style: "tableHeader" })]
                }),
                new TableCell({
                  width: {
                    size: 4505,
                    type: WidthType.DXA,
                  },
                  shading: {
                    fill: "FF0000",
                    type: ShadingType.CLEAR,
                    color: "auto",
                  },
                  children: [new Paragraph({ text: 'Expiry Date', style: "tableHeader" })]
                }),
              ],
              tableHeader: true
            }),
            ...mockData.data.map(item => {
              return new TableRow({
                children: createTableCells(item)
              })
            })
          ],
          margins: {
            top: convertInchesToTwip(0.27),
            bottom: convertInchesToTwip(0.27),
            right: convertInchesToTwip(0.27),
            left: convertInchesToTwip(0.27),
          },
        })
      ]
    }
  ]
})

const CreateWordFile = () => {

  const saveDocument2File = (doc: any, fileName: string) => {
    // Create a mime type that will associate the new file with Microsoft Word
    const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    // Create a Blob object from Packer containing the Document instance and the mimeType
    Packer.toBlob(doc).then((blob) => {
      const docblob = blob.slice(0, blob.size, mimeType)

      // Save the file using saveAs from the file-saver package
      saveAs(docblob, fileName)
    })
  }

  const reader = new FileReader()

  return (
    <Box>
      <Container>
        <Typography variant='h4' component='h1' my={4} textAlign='center'>Export Word File</Typography>
        <Box display='flex' justifyContent='center' mb={4}>
          <Button variant='contained' onClick={() => saveDocument2File(document, 'Test Document.docx')}>Export 2 Word</Button>
        </Box>

        <DocViewer
        documents={[reader.readAsArrayBuffer(document)]}
        />

        <Box py={4}>
          <ConvertToWord />
        </Box>

      </Container>
    </Box>
  )
}

export default CreateWordFile