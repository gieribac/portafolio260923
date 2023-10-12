

let slideIndex: number[] = [1, 1];
let slideId: string[] = ["mySlides1", "mySlides2"];

export function plusSlides(n: number, no: number): void {
  showSlides(slideIndex[no] += n, no);
}

export function currentSlide(n: number, no: number): void {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n: number, no: number): void {
    console.log(`showSlides n: ${n} - no: ${no}`)
  let i: number;
  let x: HTMLCollectionOf<Element> | null = document.getElementsByClassName(slideId[no]) as HTMLCollectionOf<Element> | null;
  console.log(x)
  if (x != null && x.length > 0){
    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        (x[i] as HTMLElement).style['display'] = 'none';
    }
    (x[slideIndex[no] - 1] as HTMLElement).style['display'] = 'block';
  }
}
