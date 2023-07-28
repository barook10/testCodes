class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    move(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
  
    rotate(angle, origin = [0, 0]) {
      let [ox, oy] = origin;
      let x = this.x;
      let y = this.y;
      this.x = ox + Math.cos(angle) * (x - ox) - Math.sin(angle) * (y - oy);
      this.y = oy + Math.sin(angle) * (x - ox) + Math.cos(angle) * (y - oy);
    }
  }
  
  class Line {
    constructor(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;
    }
  
    move(dx, dy) {
      this.p1.move(dx, dy);
      this.p2.move(dx, dy);
    }
  
    rotate(angle, origin = [0, 0]) {
      this.p1.rotate(angle, origin);
      this.p2.rotate(angle, origin);
    }
  }
  
  class Circle {
    constructor(center, radius) {
      this.center = center;
      this.radius = radius;
    }
  
    move(dx, dy) {
      this.center.move(dx, dy);
    }
  
    rotate(angle, origin = [0, 0]) {
      this.center.rotate(angle, origin);
    }
  }
  
  class Aggregation {
    constructor(figures = []) {
      this.figures = figures;
    }
  
    addFigure(figure) {
      this.figures.push(figure);
    }
  
    move(dx, dy) {
      this.figures.forEach(figure => {
        figure.move(dx, dy);
      });
    }
  
    rotate(angle, origin = [0, 0]) {
      this.figures.forEach(figure => {
        figure.rotate(angle, origin);
      });
    }
  }
  
  const p1 = new Point(0, 0);
  const p2 = new Point(1, 1);
  const line = new Line(p1, p2);
  const circle = new Circle(p1, 1);
  const aggregation = new Aggregation([p1, p2, line, circle]);
  
  console.log("Before moving the aggregation:");
  console.log(aggregation);
  
  aggregation.move(1, 1);
  
  console.log("\nAfter moving the aggregation by (1, 1):");
  console.log(aggregation);
  
  aggregation.rotate(Math.PI / 2, [0, 0]);
  
  console.log("\nAfter rotating the aggregation by 90 degrees around the origin:");
  console.log(aggregation);
  