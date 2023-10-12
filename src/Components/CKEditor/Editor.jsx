// App.jsx / App.tsx

import React, { Component, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";

// NOTE: Use the editor from source (not a build)!
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Font } from "@ckeditor/ckeditor5-font";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { List } from "@ckeditor/ckeditor5-list";
import { Table, TableToolbar } from "@ckeditor/ckeditor5-table";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import {
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageInsert,
} from "@ckeditor/ckeditor5-image";
import { message, notification } from "antd";
import { uploadFile } from "../../Services/lead";
import Cookies from "js-cookie";
import request from "../../Services/request";

function Editor({ onChange, initialValues }) {
  // console.log("initialValues", initialValues);
  const UPLOAD_SERVICE =
    "https://acd2-118-70-132-104.ngrok-free.app/file/upload";

  const headers = new Headers();

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then(async (file) => {
            body.append("file", file);
            try {
              const response = await fetch(UPLOAD_SERVICE, {
                method: "post",
                body: body,
                headers: headers,
              });
              console.log("response", response);
              if (!response.ok) {
                throw new Error("Lỗi khi tải ảnh lên.");
              }

              const data = await response.json();
              if (data.success) {
                resolve({ default: data?.data?.downloadUrl });
              } else {
                notification.error({
                  message:
                    data?.error?.message || "Tải ảnh lên không thành công",
                });
                reject();
              }
            } catch (error) {
              reject(error);
            }
          });
        });
      },
    };
  }

  // const content = initialValues.content;
  // console.log("content", content);

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        // data={content || " "}
        // config={editorConfiguration}
        config={{
          plugins: [
            Heading,
            Essentials,
            Bold,
            Italic,
            Paragraph,
            Font,
            List,
            Table,
            TableToolbar,
            Alignment,
            ImageInsert,
            Image,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
          ],

          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "|",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "insertTable",
            "|",
            "alignment",
            "|",
            "insertImage",
            "imageStyle:block",
            // "imageStyle:side",
            "imageStyle:alignLeft",
            "imageStyle:alignRight",
            "imageStyle:inline ",
            "imageStyle:margin-left",
            "toggleImageCaption",
            "imageTextAlternative",
            "|",
          ],
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },

          extraPlugins: [uploadPlugin],
        }}
        onChange={onChange}
      />
    </div>
  );
}

export default Editor;
