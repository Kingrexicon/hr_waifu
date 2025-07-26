let search = document.querySelector("input");
document.querySelector("#sWaifu").addEventListener("click", searchWaifu);
document.querySelector("#maid").addEventListener("click", maid);
document.querySelector("#waifu").addEventListener("click", waifu);
document.querySelector("#marin").addEventListener("click", marin);
document.querySelector("#mori").addEventListener("click", mori);
document.querySelector("#raiden").addEventListener("click", raiden);
document.querySelector("#oppai").addEventListener("click", oppai);
document.querySelector("#selfies").addEventListener("click", selfies);
document.querySelector("#uniform").addEventListener("click", uniform);
document.querySelector("#kamisato").addEventListener("click", kamisato);

// let options = document.querySelector("#p");
// options.style.visibility = 'hidden'
function searchWaifu() {
	if (search && search.value) {
		fetch(`https://api.waifu.im/search?included_tags=${search.value} `)
			.then((res) => res.json()) // parse response as JSON
			.then((data) => {
				console.log(data);
				console.log(data.images);

				document.querySelector("h2").innerHTML = data.images[0].height;
			})
			.catch((err) => {
				console.log(`error ${err}`);
				alert("No image found matching the criteria given.");
			});
	} else {
		alert("No image found matching the criteria given.");
	}
}

function maid() {
	fetch(`https://api.waifu.im/search?included_tags=maid&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
function waifu() {
	fetch(`https://api.waifu.im/search?included_tags=waifu&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function marin() {
	fetch(`https://api.waifu.im/search?included_tags=marin-kitagawa&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function mori() {
	fetch(`https://api.waifu.im/search?included_tags=mori-calliope&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function raiden() {
	fetch(`https://api.waifu.im/search?included_tags=raiden-shogun&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function oppai() {
	fetch(`https://api.waifu.im/search?included_tags=oppai&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function selfies() {
	fetch(`https://api.waifu.im/search?included_tags=selfies&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function uniform() {
	fetch(`https://api.waifu.im/search?included_tags=uniform&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function kamisato() {
	fetch(`https://api.waifu.im/search?included_tags=kamisato-ayaka&limit=10`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data.images);
			let arrayy = data.images;
			const container = document.getElementById("image-container");
			container.innerHTML = "";

			arrayy.forEach((image) => {
				if (document) {
				}
				const newImg = document.createElement("img");
				newImg.src = newImg.src = image.url;
				newImg.alt = image.url;
				container.appendChild(newImg);
			});
			
			
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}


// Show or hide button based on scroll position
window.onscroll = function () {
  const btn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top on click
document.getElementById('scrollToTopBtn').onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("light-theme");
  const toggleBtn = document.getElementById("themeToggle");
  if (isDark) {
    document.body.style.background = "#fdf6f6";
    document.body.style.color = "#111";
    toggleBtn.innerText = "☀️ Light";
  } else {
    document.body.style.background = "linear-gradient(to right, #1a1b2f, #2b2d42)";
    document.body.style.color = "#fff";
    toggleBtn.innerText = "🌙 Dark";
  }
});

// Show loader while images are loading
function showLoader() {
  document.getElementById("loader").style.display = "block";
}
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}
