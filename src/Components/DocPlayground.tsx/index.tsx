import { Box, Button, Container, Typography } from '@mui/material'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableCell,
  TableRow,
  WidthType,
  AlignmentType,
  convertInchesToTwip,
  ShadingType,
  ImageRun,
  HeightRule,
  FrameAnchorType,
  HorizontalPositionAlign,
  VerticalPositionAlign,
  BorderStyle,
} from 'docx'
import { saveAs } from 'file-saver'

const pointToDxa = (point: number) => {
  return point * 20
}

const pxToHalfPoints = (px: number) => {
  let point = px * 0.75
  return point * 2
}

const paperSize = {
  //values are in DXA, WidthType.DXA
  a0: {
    width: 2383 * 20,
    height: 3370 * 20,
  },
  a1: {
    width: 1683 * 20,
    height: 2383 * 20,
  },
  a2: {
    width: 1190 * 20,
    height: 1683 * 20,
  },
  a3: {
    width: 842 * 20,
    height: 1190 * 20,
  },
  a4: {
    width: 595.3 * 20,
    height: 841.9 * 20,
  },
  a5: {
    width: 420 * 20,
    height: 595 * 20,
  },
}

const measures = {
  fullWidthInPercentage: 5000, //type: WidthType.PERCENTAGE, used for relative width , Table width
}

const document = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      children: [
        new Table({
          alignment: AlignmentType.CENTER,
          width: {
            size: paperSize.a4.width,
            type: WidthType.DXA,
          },
          rows: [
            new TableRow({
              height: {
                value: paperSize.a4.height,
                rule: HeightRule.EXACT,
              },
              children: [
                new TableCell({
                  width: {
                    size: 25,
                    type: WidthType.PERCENTAGE,
                  },
                  shading: {
                    fill: '#3e8e7e',
                    type: ShadingType.CLEAR,
                    color: 'auto',
                  },
                  children: [
                    // new Paragraph({ text: 'Left side', style: 'tableHeader' }),
                    new Table({
                      alignment: AlignmentType.CENTER,
                      width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                      },
                      rows: [
                        new TableRow({
                          height: {
                            value: paperSize.a4.height,
                            rule: HeightRule.EXACT,
                          },
                          children: [
                            new TableCell({
                              width: {
                                size: 75,
                                type: WidthType.PERCENTAGE,
                              },
                              shading: {
                                fill: '#ffffff',
                                type: ShadingType.NIL,
                                color: 'auto',
                              },
                              children: [
                                new Paragraph({
                                  text: 'Right Side',
                                  style: 'tableHeader',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 75,
                    type: WidthType.PERCENTAGE,
                  },
                  shading: {
                    fill: '#ffffff',
                    type: ShadingType.NIL,
                    color: 'auto',
                  },
                  children: [
                    new Paragraph({ text: 'Right Side', style: 'tableHeader' }),
                  ],
                }),
              ],
            }),
          ],
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
          },
        }),
      ],
    },
  ],
})

const DocPlaygroundBlock = () => {
  const downloadWordFile = async (fileName: string = 'Test Document') => {
    // Create a mime type that will associate the new file with Microsoft Word
    const mimeType =
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    // Create a Blob object from Packer containing the Document instance and the mimeType
    Packer.toBlob(document).then((blob) => {
      const docBlob = blob.slice(0, blob.size, mimeType)

      // Save the file using saveAs from the file-saver package
      saveAs(docBlob, fileName)
    })
  }
  return (
    <Container>
      <Box py={5}>
        <Typography
          component='h1'
          variant='h2'
          textAlign='center'
          color='primary'>
          Download Word File
        </Typography>
        <Box display='flex' justifyContent='center' my={4}>
          <Button
            variant='outlined'
            color='success'
            sx={{
              width: '300px',
              textTransform: 'capitalize',
              color: 'GrayText',
              fontSize: '20px',
              marginBottom: '8px',
            }}
            onClick={() => downloadWordFile('CV Template 1 Test')}>
            Template 1
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default DocPlaygroundBlock
