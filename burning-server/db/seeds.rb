
Airplane.destroy_all
Flight.destroy_all

plane1 = Airplane.create name:'747',  rows:10, columns:10
plane2 = Airplane.create name:'787', rows:12, columns:12

flight1 = Flight.create flight_no:'QA123', origin:'PER', destination:'SYD', date:'2018/02/01'
flight2 = Flight.create flight_no:'QA321', origin:'SYD', destination:'PER', date:'2018/02/03'
flight3 = Flight.create flight_no:'QA234', origin:'SYD', destination:'PER', date:'2018/02/04'


User.destroy_all
user1 = User.create name:'Grant Test', email:'grant@test.co'
user2 = User.create name:'Linda Test', email:'linda@test.co'
user3 = User.create name:'Alex Test', email:'alex@test.co'

Reservation.destroy_all
res1 = Reservation.create seat:'G11'
res2 = Reservation.create seat:'A12'
res3 = Reservation.create seat:'B15'
res4 = Reservation.create seat:'C16'

plane1.flights << flight1 << flight2
plane2.flights << flight3

flight1.reservations << res1
flight2.reservations << res3
flight3.reservations << res4

user1.reservations << res1 << res2
user2.reservations << res3 << res4
user3.reservations << res3 << res4
