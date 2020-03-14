$("a").each(function() {
  const old = this.href;
  if (this.href.startsWith('https://crystal-lang.org/api/')) {
    this.href = this.href.replace(/^https:\/\/crystal-lang.org\/api\/[^\\/]+\//, 'https://crystal-lang.org/api/latest/');
    return;
  }
  if (this.href.startsWith('https://www.boost.org/doc/libs/')) {
    this.href = this.href.replace(/^https:\/\/www.boost.org\/doc\/libs\/[^\\/]+\//, 'https://www.boost.org/doc/libs/release/');
    return;
  }
  if (this.href.startsWith('https://ruby-doc.org/')) {
    this.href = this.href.replace(/^(https:\/\/ruby-doc.org\/[^\\/]+)-[^\\/]+\//, (_, prefix) => `${prefix}/`);
    return;
  }
  if (this.href.startsWith('https://docs.python.org/2/library/')) {
    this.href = this.href.replace(/^https:\/\/docs.python.org\/2\/library\//, 'https://docs.python.org/3/library/');
    return;
  }
});
