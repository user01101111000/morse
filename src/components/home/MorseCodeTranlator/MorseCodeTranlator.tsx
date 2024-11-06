import { useFormik } from "formik";
import { IMorseCodeTranlatorInputs } from "../../../types/components/MorseCodeTranlator";
import { FC, useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { LuEraser } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import text_to_morse_code from "../../../utils/text_to_morse_code";

const MorseCodeTranlator: FC = () => {
  const [clickedCopy, setClickedCopy] = useState<boolean>(false);
  const [clickedCopy2, setClickedCopy2] = useState<boolean>(false);

  const navigate = useNavigate();

  const { values, handleChange, handleBlur, setFieldValue } =
    useFormik<IMorseCodeTranlatorInputs>({
      initialValues: {
        base_text: "",
        morse_code: "",
      },
      onSubmit: () => {},
    });

  useEffect(() => {
    setFieldValue("morse_code", text_to_morse_code(values.base_text));
  }, [values.base_text]);

  return (
    <form className="morse_code_translator" autoComplete="off">
      <h1>
        The term{" "}
        <a href="https://en.wikipedia.org/wiki/Morse_code" target="_blank">
          Morse Code
        </a>{" "}
        refers to either of two systems for representing letters of the
        alphabet, numerals, and punctuation marks by an arrangement of dots,
        dashes, and spaces. The codes are transmitted as electrical pulses of
        varied lengths or analogous mechanical or visual signals, such as
        flashing lights.
      </h1>

      <div className="input_boxes">
        <div className="input_box">
          <div className="input_box_tools">
            <div className="input_box_tools_header">
              <h2>Text</h2>
              <FaRegCopy
                data-tooltip-id="copy_tooltip"
                data-tooltip-content={
                  clickedCopy ? "Copied 💜" : "Click to copy"
                }
                className="input_box_tools_icon"
                onClick={() => {
                  navigator.clipboard.writeText(values.base_text);
                  setClickedCopy(true);
                  setTimeout(() => {
                    setClickedCopy(false);
                  }, 500);
                }}
              />
              <Tooltip place="top" id="copy_tooltip" />
            </div>

            <div className="input_box_tools_footer">
              <LuEraser
                data-tooltip-id="clear_tooltip"
                data-tooltip-content="Clear all"
                className="input_box_tools_icon"
                onClick={() => {
                  setFieldValue("base_text", "");
                }}
              />
              <Tooltip place="top" id="clear_tooltip" />
            </div>
          </div>
          <textarea
            name="base_text"
            className="base_text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.base_text}
            rows={7}
            placeholder="Enter your text"
          ></textarea>
        </div>

        <div className="input_box">
          <div className="input_box_tools">
            <div className="input_box_tools_header">
              <h2>Morse Code</h2>
              <FaRegCopy
                data-tooltip-id="copy_tooltip"
                data-tooltip-content={
                  clickedCopy2 ? "Copied 💜" : "Click to copy"
                }
                className="input_box_tools_icon"
                onClick={() => {
                  navigator.clipboard.writeText(values.morse_code);
                  setClickedCopy2(true);
                  setTimeout(() => {
                    setClickedCopy2(false);
                  }, 500);
                }}
              />
              <Tooltip place="top" id="copy_tooltip" />
            </div>

            <div className="input_box_tools_footer"></div>
          </div>
          <textarea
            name="morse_code"
            className="base_text extra"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.morse_code}
            rows={7}
            disabled
          ></textarea>
        </div>
      </div>

      <button type="button" onClick={() => navigate("/about")}>
        About Samuel Morse
      </button>
    </form>
  );
};

export default MorseCodeTranlator;
