function handleTabSelection(event, callback, params) {
  const args = [...arguments]
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    callback(...args.slice(2))
  }
}

export {handleTabSelection}