import { useState } from "react";
const Content = () => {
	const [name, setName] = useState('Dave');
	const [count, setCount] = useState(0);

	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Dave'];  // declare a array

		// Phương thức Math.floor() sẽ làm tròn dưới số được cung cấp khi gọi phương thức. 
		// Phương thức sẽ trả về số nguyên gần nhất nhỏ hơn số truyền vào.

		// Math.floor( number)
		// number là số cần được làm tròn.

		// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
		// Returns a random integer from 0 to 99:
		// Math.floor(Math.random() * 100);

		const int = Math.floor(Math.random() * 3);   //randomly selects one of those names using a Math method
		setName(names[int]);
	}

	const handleClick = () => {
		setCount(count + 1);
		console.log(count)
	}

	const handleClick2 = (name) => {
		console.log(count)
	}

	// more info: https://www.w3schools.com/jsref/event_target.asp

	// Thuộc targettính trả về phần tử nơi xảy ra sự kiện .
	// Thuộc targettính chỉ đọc.
	// Thuộc target tính trả về phần tử mà sự kiện đã xảy ra, trái ngược với currentTargetthuộc tính trả về phần tử có trình xử lý sự kiện đã kích hoạt sự kiện.

	const handleClick3 = (e) => {
		console.log(e.target.tagName)
		// console.log(e.target.innerText)
	}

	return (
		<main>
			<p onDoubleClick={handleClick}>
				Hello {name}!
			</p>

			<button onClick={handleNameChange}>Change name</button>
			<button onClick={handleClick}>Click it</button>
			<button onClick={handleClick2}>Click it</button>
		</main>
	)
}

export default Content