function QrCode() {
  return (
    <main className="flex flex-col items-center w-128">
      <div className="bg-white p-4 rounded-2xl w-2/3 justify-center">
        <img src="/image-qr-code.png" className="rounded-xl" alt="qr code" />
        <h2 className="font-outfit w-full object-cover leading-tight mt-5 font-bold text-2xl text-center">
          Improve your front-end skills by building projects
        </h2>
        <p className=" p-5 tracking-tight leading-tight text-center font-outfit text-grayishBlue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
}

export default QrCode;
