const upPool = require("../Model/upcPoolModel");
moment = require("moment");

const upcPoolCtrl = {
  createUpcPool: async (req, res) => {
    try {
      const {
        pool_type,
        start_date,
        end_date,
        title,
        price,
        time_duration,
        up_pool_raise,
        content,
        images,
        min_allocation,
        max_allocation,
        up_pool_access,
        participants,
        swap_amount,
        closes_in,
        min_swap_level,
        symbol,
        decimal,
        address,
        total_supply,
        description,
        project_goal,
        project_team,
      } = req.body;

      const newUpPool = new upPool({
        start_date,
        end_date,
        pool_type,
        title,
        price,
        time_duration,
        up_pool_raise,
        content,
        images,
        min_allocation,
        max_allocation,
        up_pool_access,
        participants,
        swap_amount,
        closes_in,
        min_swap_level,
        symbol,
        decimal,
        address,
        total_supply,
        description,
        project_goal,
        project_team,
      });

      newUpPool.images = newUpPool._id + newUpPool.images;

      await newUpPool.save();

      res.json({
        id: newUpPool._id,
        msg: "pool is created",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUpcPool: async (req, res) => {
    try {
      const upc_Pool = await upPool.find();

      var date = new Date();
      var start = new Date(upc_Pool.start_date);
      var end = new Date(upc_Pool.end_date);

    
      //upc_Pool.start_date = '2021-05-20'
      //upc_Pool.end_date = '2021-05-27'
      //console.log(moment(start).format('MM/DD/YYYY'))
      //console.log(upc_Pool.start_date)

      upc_Pool.time_duration = Math.floor(
        (start.getTime() - date.getTime()) / 1000 / (3600 * 24)
      );
      upc_Pool.closes_in = Math.floor(
        (end.getTime() - date.getTime()) / 1000 / (3600 * 24)
      );

      res.json({ upcPool: upc_Pool });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getPoolbyId: async (req, res) => {
    try {
      const pool = await upPool.findById({ _id: req.params.id });

      var date = new Date();
      var start = new Date(pool.start_date);
      var end = new Date(pool.end_date);

      //console.log(moment.utc('2021-05-20T00:00:00.000Z').format(mm/dd/yyyy), "hello Ashutosh")
      //pool.start_date = '2021-05-20'
      //pool.end_date = '2021-05-27'

      //pool.start_date = moment(start).utc().format('MM/DD/YYYY')
      //pool.end_date = end
      //console.log(pool.start_date)
      pool.time_duration = Math.floor(
        (start.getTime() - date.getTime()) / 1000 / (3600 * 24)
      );
      pool.closes_in = Math.floor(
        (end.getTime() - date.getTime()) / 1000 / (3600 * 24)
      );

      res.json(pool);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  //function to get Upc pool by pagination by default we can see 8 items per page.
  getPoolByPagignation: async function (req, res) {
		try {
			//here we can give items per page in query
			const per_page_item = parseInt(req.query.per_page) || 9;
			const page_no = req.query.page_no ?  parseInt(req.query.page_no) : 1;

			const count_items = await upPool.countDocuments({
				pool_type: "upcomming",
			});
			console.log(`Number of documents: ${count_items}`);
			const total_pages = Math.ceil(count_items / per_page_item);
			console.log(total_pages);

			pagination = {
				limit: per_page_item,
				skip: per_page_item * (page_no - 1),
			};
			const upc_Pool = await upPool
				.find({ pool_type: "upcomming" })
				.limit(pagination.limit)
				.skip(pagination.skip);

			if (upc_Pool.length == 0) {
				return res.json({ msg: "there is no data" });
			}
			var date = new Date();
			var start = new Date(upc_Pool.start_date);
			var end = new Date(upc_Pool.end_date);
			upc_Pool.time_duration = Math.floor(
				(start.getTime() - date.getTime()) / 1000 / (3600 * 24),
			);
			upc_Pool.closes_in = Math.floor(
				(end.getTime() - date.getTime()) / 1000 / (3600 * 24),
			);

			res.json({
				current_page: page_no,
				upcPool: upc_Pool,
				total_pages: total_pages,
			});
		} catch (e) {
			return res.status(500).send(e.message);
		}
	},

  updateUpcPool: async (req, res) => {
    try {
      const Upc_pool_id = req.body.id;
      const updatedUpcPool = await upPool.updateOne(
        { _id: Upc_pool_id },
        {
          pool_type: req.body.pool_type,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          title: req.body.title,
          time_duration: req.body.time_duration,
          up_pool_raise: req.body.up_pool_raise,
          content: req.body.content,
          images: req.body.images,
          min_allocation: req.body.min_allocation,
          max_allocation: req.body.max_allocation,
          up_pool_access: req.body.up_pool_access,
          participants: req.body.participants,
          swap_amount: req.body.swap_amount,
          closes_in: req.body.closes_in,
          min_swap_level: req.body.min_swap_level,
          symbol: req.body.symbol,
          decimal: req.body.decimal,
          address: req.body.address,
          total_supply: req.body.total_supply,
          description: req.body.description,
          project_goal: req.body.project_goal,
          project_team: req.body.project_team,
        }
      );
      if (updatedUpcPool) {
        return res
          .status(201)
          .json({ msg: "Upc pool is updated successfully!" });
      }
      res.json({
        msg: "Oops, there is some error! upc pool has not updated yet!",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = upcPoolCtrl;
