import classnames from "classnames";
import { useContext } from "react";
import { MatrixTableContext, MatrixTableContextProvider } from "./context";
import defaultPricing from "../../pages/api/pricing";

type Props = {
  initialMatrix?: import("../../types").Matrix;
} & import("react").HTMLAttributes<HTMLDivElement>;

/**
 * Add 4 buttons:
 * - Cancel to reset the matrix to how it was before changing the values (only when in edit mode)
 * - Edit to make the fields editable (only when not in edit mode)
 * - Clear to completely clear the table
 * - Save to save the table
 * @param param0
 */
const MatrixTable: import("react").FC<Omit<Props, "initialMatrix">> = ({
  className,
  children,
  ...props
}) => {
  // State ------------------------------------------------------------------- //
  const [{ matrix }, dispatch] = useContext(MatrixTableContext);

  // Handlers ---------------------------------------------------------------- //

  // You can save (to api) the matrix here. Remember to update originalMatrix when done.
  const save = async () => {};
  const cancel = async () => {};
  const edit = async () => {};
  const clear = async () => {};
  // Effects ----------------------------------------------------------------- //

  // Rendering --------------------------------------------------------------- //

  return (
    <div className={classnames(["container", className])} {...props}>
      <table>
        <tr>
          <th></th>
          <th>Lite</th>
          <th>Standard</th>
          <th>Unlimited</th>
        </tr>
        <tr>
          <td>36 months</td>
          <td>
            <input
              placeholder="Enter value here"
              value={matrix["36months"].lite || ""}
              onChange={(e) =>
                dispatch({
                  type: "SOME_ACTION",
                  payload: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              placeholder="Enter value here"
              value={matrix["36months"].standard || ""}
              onChange={(e) =>
                dispatch({
                  type: "SOME_ACTION",
                  payload: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              placeholder="Enter value here"
              value={matrix["36months"].unlimited || ""}
              onChange={(e) =>
                dispatch({
                  type: "SOME_ACTION",
                  payload: e.target.value,
                })
              }
            />
          </td>
        </tr>
        <tr>
          <td>24 months</td>
          <input
            placeholder="Enter value here"
            value={matrix["24months"].lite || ""}
            onChange={(e) =>
              dispatch({
                type: "SOME_ACTION",
                payload: e.target.value,
              })
            }
          />
          <td>
            <input
              placeholder="Enter value here"
              value={matrix["24months"].standard || ""}
              onChange={(e) =>
                dispatch({
                  type: "SOME_ACTION",
                  payload: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              placeholder="Enter value here"
              value={matrix["24months"].unlimited || ""}
              onChange={(e) =>
                dispatch({
                  type: "SOME_ACTION",
                  payload: e.target.value,
                })
              }
            />
          </td>
        </tr>
      </table>
      {/* <button onClick={save}>Save</button>
      <br />
      <br /> */}
      {/* 36 months lite:
      <input
        placeholder="Enter value here"
        value={matrix["36months"].lite || ""}
        onChange={(e) =>
          dispatch({
            type: "SOME_ACTION",
            payload: e.target.value,
          })
        }
      /> */}
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "50%",
          padding: "10px",
        }}
      >
        <button onClick={edit}>Edit</button>
        <button onClick={save}>Save</button>
        <button onClick={cancel}>Cancel</button>
        <button onClick={clear}>Clear</button>
      </div>
      <br />
      <br />
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
};

const MatrixTableWithContext: import("react").FC<Props> = ({
  initialMatrix,
  ...props
}) => {
  // You can fetch the pricing here or in pages/index.ts
  // Remember that you should try to reflect the state of pricing in originalMatrix.
  // matrix will hold the latest value (edited or same as originalMatrix)

  return (
    <MatrixTableContextProvider initialMatrix={initialMatrix}>
      <MatrixTable {...props} />
    </MatrixTableContextProvider>
  );
};

export default MatrixTableWithContext;
