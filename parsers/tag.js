var id = 0;

function Tag (name, attrs, isSingle) {
  this.type = 'tag'
  this.name = name
  this.attrs = attrs || []
  this.isSingle = isSingle || false
  this.id = id++;

  this.parentNode = null
  this.firstChild = null
  this.lastChild = null
  this.nextSibling = null
  this.previousSibling = null
}

Tag.prototype.clone = function () {
  return new Tag(this.name, this.attrs.slice(0), this.isSingle)
}

module.exports = Tag
