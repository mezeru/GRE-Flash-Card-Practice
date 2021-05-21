import docx


def getText(filename):
    doc = docx.Document(filename)
    fullText = []
    for para in doc.paragraphs:
        print(para.text)


if __name__ == "__main__":
    print("Enter The name of the file : ", end="")
    name = input()
    getText(name)
