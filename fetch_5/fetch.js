fetch('http://127.0.0.1:5501/img/business-people.png')
    .then(resp => resp.type === 'basic' ? resp.blob() : resp.text())
    .then(data => {
        if (typeof data === 'string') {
            console.log('Es un string')
            document.open()
            document.write(data)
            document.close()
        } else {
            console.log('Es un blob')
            const img = document.createElement('img')
            console.log(img)
            img.src = URL.createObjectURL(data)
            document.body.append(img)
        }
    })




