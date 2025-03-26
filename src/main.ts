import p5 from "p5";

new p5((p: p5) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        const w = p.width / 2;
        const h = p.height / 2;

        drawCircle(0, 0, w, h);
        drawCircle(w, 0, w, h);
        drawCircle(0, h, w, h);
        drawCircle(w, h, w, h);
    }

    // キャンバスの領域を4分割していると解釈
    function drawCircle(x: number, y: number, width: number, height: number) {
        p.circle(x + width / 2, y + height / 2, p.min(width, height));
    }
})