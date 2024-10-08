export default () => {
  const hd = () => {
    const el = document.querySelector('#app')! as HTMLDivElement
    // console.log(el)
    el.addEventListener('mouseenter', () => {
      // console.log('禁止穿透')
      window.api.setIgnoreMouseEvents(false)
    })

    document.body.addEventListener('mouseover', (event: MouseEvent) => {
      if (event.target == document.body) {
        // console.log('開启穿透')
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }
  return { hd }
}
