import { render } from "../../../helper/test-utils";
import { Counter } from "../Counter";

describe("Counter component", () => {
  it("should render initial valule", async () => {
    // * getBy~は、見つからなかったらエラー、みつかったらnodeを返す。
    // * queryBy~は見つからなかったらnull,見つかったらnodeを返す。
    // * findBy~は見つかった時に解決するpromiseを返す。見つからなかったらエラー
    // * 複数のものを探す必要がある場合は、~AllBy~を使用する
    const { debug, getByText, queryByText } = render(<Counter />);
    getByText("-");
    expect(queryByText("+")).toBeInTheDocument();
    expect(getByText("Loading開始")).toBeInTheDocument();
    debug();
  });
});
