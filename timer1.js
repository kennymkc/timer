const args = process.argv.slice(2);

for (const delay of args) {
  if (delay <= 0 || delay === NaN || delay !== Number) {
    return console.log('No beep for you!')
  }
  setTimeout(() => process.stdout.write('\x07'), delay * 1000)
}
