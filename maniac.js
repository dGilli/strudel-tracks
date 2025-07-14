/*
@title "Maniac" (wip)
song @by Michael Sembello
script @by https://github.com/dGilli
@details sourced from Captain Pikant. "Michael Sembello - Maniac (Drum Pattern No. 22)." Date, 18 Mar. 202
<https://www.patreon.com/posts/48752984?collection=301907>
*/

setcpm(155.2/2)

$:stack(
  s("sd -"),
  s("<-!4 rim@2 -!2 rim!3 ->*4").gain(.3),
  s("hh*4").gain(.25),
  s("<-!7 cp*4 cp cp*4 cp ->*4").gain(.1).lpf(8000).delay(.1).dt(.1).pan(0.2),
  s("<cb cb*3 cb -!8 cb*3>*4").gain(.12).pan(0.8),
  s("bd*2").room(.03).rsize(2),
).bank("linndrum")
._punchcard()

