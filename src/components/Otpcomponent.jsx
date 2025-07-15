import { useRef, useState } from "react";

export const OtpComponent = ({ number }) => {
  const ref = useRef(Array(number).fill(0));

  return (
    <>
      {Array(number)
        .fill(1)
        .map((x, index) => (
          <SubOtpBox
            key={index}
            reference={(e) => (ref.current[index] = e)}
            onDone={() => {
              if (index >= number) {
                return;
              }
              ref.current[index + 1].focus();
            }}
            onEmpty={() => {
              if (index - 1 == 0) {
                return;
              }
              ref.current[index - 1].focus();
            }}
          />
        ))}
    </>
  );
};

function SubOtpBox({ reference, onDone, onEmpty }) {
  const [value, setValue] = useState("");
  const allowedInput = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <>
      <input
        value={value}
        maxLength={1}
        ref={reference}
        onChange={(e) => {
          let val = e.target.value;
          if (allowedInput.find((x) => x == val)) {
            setValue(e.target.value);
            onDone();
          }
        }}
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            setValue("");
            onEmpty();
          }
        }}
        type="text"
        className="w-[40px] h-[50px] rounded-2xl bg-gray-600 outline-none m-1 px-4 text-white"
      />
    </>
  );
}
