/* 
*PSEUCODE GAME SUIT*

* Tampilkan pilihan
* BACA dan SIMPAN 'pilihan player'

* BACA dan SIMPAN 'pilihan komputer'


* IF "pilihan player" sama dengan "pilihan komputer" THEN TULISKAN hasil "SERI"

* ELSE IF "pilihan player" sama dengan "GAJAH"  IF "pilihan komputer" sama dengan "ORANG" THEN TULISKAN hasil "MENANG" ELSE TULISKAN hasil "KALAH"

* ELSE IF "pilihan player" sama dengan "ORANG"  IF "pilihan komputer" sama dengan "GAJAH" THEN TULISKAN hasil "KALAH" ELSE TULISKAN hasil "MENANG"

* ELSE IF "pilihan player" sama dengan "SEMUT"  IF "pilihan komputer" sama dengan "ORANG" THEN TULISKAN hasil "MENANG" ELSE TULISKAN hasil "KALAH"

* ELSE TULISKAN hasil " "


* SIMPAN hasilnya
* TAMPILKAN hasilnya


* TAMPILKAN tanya


* TAMPILKAN alert


*/

	var tanya  = true;
	while (tanya){
		// menangkap pilihan player
		var  p = prompt('pilih : orang, semut, gajah');

		// menangkap pilihan komputer
		// membangkitkan bilangan random
		var comp = Math.random();
		if (comp < 0.34){
			comp = 'gajah';
		}
		else if(comp >= 0.34 && comp < 0.67){
			comp = 'orang';
		}
		else {
			comp = 'semut';
		}

		
		var hasil = '';
		//menentuan rules
		if (p == comp)
		{
			hasil = 'SERI';
		}

		else if (p == 'gajah')
		{
			if (comp == 'orang'){
				hasil = 'MENANG';
			} 
			else {
				hasil = 'KALAH';
			}
		}

		else if (p == 'gajah')
		{
			// if (comp == 'gajah'){
			// 	hasil = 'KALAH';
			// } 
			// else {
			// 	hasil = 'MENANG';
			// }
			hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
		}

		else if (p == 'orang')
		{
			hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
		}

		else if (p == 'semut')
		{
			hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
		}
		else 
		{
			'Memasukan pilihan yang salah !'
		}

		// tampilkan hasilnya
		alert('Kamu memilih : '+ p + '\nKomputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

		tanya = confirm('Lagi ?');
	}
	alert('Terima kasih sudah bermain !');
	