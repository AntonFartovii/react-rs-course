// при изменении <input type="file">


export function addFile() {
  const inputFile = document.querySelector<HTMLInputElement>('[type="file"]');

  inputFile?.addEventListener('change', (e) => {
    const target = e.target as typeof e.target & {
      files: FileList,
      value: string | ArrayBuffer | null | undefined
    };

    const files = target.files; // сохраним в переменную files значение свойства files

    const countFiles = files?.length ?? 0;
    if (!countFiles) {
      alert('Не выбран файл!');
      return;
    }

    const selectedFile = files![0]; // присваиваем переменной selectedFile ссылку на выбранный файл
    if (!/^image/.test(selectedFile.type)) {
      alert('Выбранный файл не является изображением!');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.addEventListener('load', (event) => {
      const img = document.querySelector<HTMLImageElement>('img') || { src: '', alt: '' };
      img.src = event.target?.result as string;
      img.alt = selectedFile.name;
      // const src = e.target?.result as string;
      // const alt = selectedFile.name;
      // console.log(src);
      // console.log(alt);
    });
  });
}

export function getDataFile(target: any) {

  const files = target.files; // сохраним в переменную files значение свойства files

  const countFiles = files?.length ?? 0;
  if (!countFiles) {
    alert('Не выбран файл!');
    return;
  }

  const selectedFile = files![0]; // присваиваем переменной selectedFile ссылку на выбранный файл
  if (!/^image/.test(selectedFile.type)) {
    alert('Выбранный файл не является изображением!');
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);

  reader.addEventListener('load', (e) => {
    const img = document.querySelector<HTMLImageElement>('img') || { src: '', alt: '' };
    img.src = e.target?.result as string;
    img.alt = selectedFile.name;
    // const src = e.target?.result as string;
    // const alt = selectedFile.name;
    // console.log(src);
    // console.log(alt);
    return e.target?.result
  });
}
