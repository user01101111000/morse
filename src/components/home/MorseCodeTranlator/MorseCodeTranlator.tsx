import { useFormik } from "formik";
import { IMorseCodeTranlatorInputs } from "../../../types/components/MorseCodeTranlator";
import { FC, useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { LuEraser } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import text_to_morse_code from "../../../utils/text_to_morse_code";
import { useTranslation } from "react-i18next";
import { FaVolumeUp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { play_morse_code } from "../../../utils/morse_code_audio";
import { text_to_audio } from "../../../utils/text_to_audio";
import { download_morse_code } from "../../../utils/download_morse_code_audio";

const MorseCodeTranlator: FC = () => {
  const [fr, setFr] = useState<number>(440);
  const [sp, setSp] = useState<number>(150);
  const [playing, setPlaying] = useState<boolean>(false);

  const { t } = useTranslation();

  const [clickedCopy, setClickedCopy] = useState<boolean>(false);
  const [clickedCopy2, setClickedCopy2] = useState<boolean>(false);

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
      <div className="input_boxes">
        <div className="input_box">
          <div className="input_box_tools">
            <div className="input_box_tools_header">
              <h2>{t("home.text")}</h2>
              <FaRegCopy
                data-tooltip-id="copy_tooltip"
                data-tooltip-content={
                  clickedCopy ? t("home.copied") : t("home.copy")
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
              <FaVolumeUp
                data-tooltip-id="volume_tooltip"
                data-tooltip-content={t("home.audio")}
                className="input_box_tools_icon"
                onClick={async () => {
                  if (values.base_text && !playing)
                    text_to_audio(values.base_text);
                }}
              />

              <Tooltip place="top" id="copy_tooltip" />
            </div>

            <div className="input_box_tools_footer">
              <LuEraser
                data-tooltip-id="clear_tooltip"
                data-tooltip-content={t("home.clear")}
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
            placeholder={t("home.enter_text")}
          ></textarea>
        </div>

        <div className="input_box">
          <div className="input_box_tools">
            <div className="input_box_tools_header">
              <h2>{t("home.morse_code")}</h2>
              <FaRegCopy
                data-tooltip-id="copy_tooltip"
                data-tooltip-content={
                  clickedCopy2 ? t("home.copied") : t("home.copy")
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
              <FaVolumeUp
                data-tooltip-id="volume_tooltip"
                data-tooltip-content={t("home.audio")}
                className="input_box_tools_icon"
                onClick={async () => {
                  if (values.morse_code && !playing) {
                    setPlaying(true);
                    await play_morse_code(values.morse_code, fr, sp);
                    setPlaying(false);
                  }
                }}
              />

              <select
                name="morse_hz"
                id="morse_hz"
                onChange={(e) => {
                  setFr(+e.target.value);
                }}
              >
                <option value="440">440 fr</option>
                <option value="660">660 fr</option>
                <option value="880">880 fr</option>
                <option value="1100">1100 fr</option>
                <option value="1320">1320 fr</option>
                <option value="1540">1540 fr</option>
                <option value="1760">1760 fr</option>
              </select>

              <select
                name="morse_hz"
                id="morse_hz"
                onChange={(e) => {
                  setSp(+e.target.value);
                }}
              >
                <option value="150">150 sp</option>
                <option value="200">200 sp</option>
                <option value="250">250 sp</option>
                <option value="300">300 sp</option>
              </select>

              <Tooltip place="top" id="copy_tooltip" />
              <Tooltip place="top" id="volume_tooltip" />
            </div>

            <div className="input_box_tools_footer">
              <IoMdDownload
                data-tooltip-id="download_tooltip"
                data-tooltip-content="Download audio"
                className="input_box_tools_icon"
                onClick={() => {
                  download_morse_code(values.morse_code, fr, sp);
                }}
              />

              <Tooltip place="top" id="download_tooltip" />
            </div>
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
    </form>
  );
};

export default MorseCodeTranlator;
