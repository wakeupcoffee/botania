function Branch(begin, end, level) {
  this.begin = begin;
  this.end = end;
  this.level = level;
  this.finished = false;

  this.show = function() {
    stroke(120,120,100);
    strokeWeight(floor(((leafSlider.value() - level) + 2)/2));
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branch = function(angle) {
    var branchRatio = branchRatioSlider.value();
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(angle);
    dir.mult(branchRatio);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, this.level + 1);
    return b;
  }

  this.branchA = function() {
    return this.branch(angleSlider.value());
  }
  this.branchB = function() {
    return this.branch(-angleSlider.value());
  }
}
