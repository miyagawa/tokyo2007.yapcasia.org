function random_speaker(){
  var speakername=new Array()
  speakername[1]="Audrey Tang"
  speakername[2]="Jesse Vincent"
  speakername[3]="Mark Jason Dominus"
  speakername[4]="Ben Trott"
  speakername[5]="Brad Fitzpatrick"
  speakername[6]="Ingy döt Net"
  
  var speakerimage=new Array()
  speakerimage[1]="http://tokyo2007.yapcasia.org/speakers/images/audrey_tang.jpg"
  speakerimage[2]="http://tokyo2007.yapcasia.org/speakers/images/jesse_vincent.jpg"
  speakerimage[3]="http://tokyo2007.yapcasia.org/speakers/images/mark_jason_dominus.jpg"
  speakerimage[4]="http://tokyo2007.yapcasia.org/speakers/images/ben_trott.jpg"
  speakerimage[5]="http://tokyo2007.yapcasia.org/speakers/images/brad_fitzpatrick.jpg"
  speakerimage[6]="http://tokyo2007.yapcasia.org/speakers/images/ingy_dot_net.jpg"
  
  var speakerprofile=new Array()
  speakerprofile[1]="Audrey Tang (Traditional chinese: 唐鳳) is a Taiwanese free software programmer, best known for initiating and leading the Pugs project, a joint effort from Haskell and Perl communities to implement the Perl 6 language."
  speakerprofile[2]="Jesse is the creator of RT and the founder of Best Practical Solutions. He spends an awful lot of time on airplanes."
  speakerprofile[3]="Mark is head of software engineering at the Penn Genomics Institute. He is the author of the book Higher-Order Perl."
  speakerprofile[4]="Ben Trott is co-founder and CTO of Six Apart, the leader in blogging software and services."
  speakerprofile[5]="Brad Fitzpatrick is the founder and CTO of Danga Interactive, best known for the popular community blogging and social networking site LiveJournal.com."
  speakerprofile[6]="Ingy döt Net is the Spiffy Perl Hacker who brought you Inline, YAML, Kwiki, Spork and other ridiculous top level namespaces."
  
  var profilelink=new Array()
  profilelink[1]="http://tokyo2007.yapcasia.org/speakers/audrey_tang.html"
  profilelink[2]="http://tokyo2007.yapcasia.org/speakers/jesse_vincent.html"
  profilelink[3]="http://tokyo2007.yapcasia.org/speakers/mark_jason_dominus.html"
  profilelink[4]="http://tokyo2007.yapcasia.org/speakers/ben_trott.html"
  profilelink[5]="http://tokyo2007.yapcasia.org/speakers/brad_fitzpatrick.html"
  profilelink[6]="http://tokyo2007.yapcasia.org/speakers/ingy_doet_net.html"

  var ry=Math.floor(Math.random()*speakername.length)

  if (ry==0)
     ry=1
     document.write('<div id="speaker"><h2>Featured Speaker - <strong>'+speakername[ry]+'</strong></h2><img src="'+speakerimage[ry]+'" alt="'+speakername[ry]+'" width=100" height="100" /><p>'+speakerprofile[ry]+'</p><ul class="more"><li><a href="'+profilelink[ry]+'" title="'+speakername[ry]+'">profile &#38; sessions &#187;</a></li></ul></div>')
}

random_speaker()
